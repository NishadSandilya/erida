import ButtonRound from "./ButtonRound"
import ButtonSquared from "./ButtonSquared"
import OrderDetailsModal from "./OrderDetailsModal"
import { useContext, useEffect, useState } from "react"
import { AppContext } from "./Data"
import axios from "axios"
import { reloadWindow } from "./windowReload"
import { removeDepreciatedSST } from "./pingServer"

//Define the Razorpay Loader SDK
const loadSDK = (src) => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.src = src
        document.body.appendChild(script)
        script.onload = () => {
            resolve(true)
        }
        script.onerror = () => {
            reject("Razorpay Failed to Load. Are you sure you Online?")
        }
    })
}

const OrderCard = ({ orderDetails }) => {
    const [detailsModalVisibile, setDetailsModalVisibility] = useState(false)
    const [{ infoDisplayControls }, ,{hocDisplayControls}] = useContext(AppContext)

    //Define the razorpay display modal
    const displayRazorpayModal = async (orderId) => {
        try {
            await loadSDK('https://checkout.razorpay.com/v1/checkout.js')
            //If sdk is lodaed, process the payment for the order ID
            try{
                hocDisplayControls[1](() => {
                    return {
                        visibility: true
                    }
                })
                const serverResponse = await axios({
                    method: 'post',
                    withCredentials: true,
                    url: 'https://www.erida.herokuapp.com/v1/payments/create-order',
                    data:{
                        orderId
                    }
                })
                hocDisplayControls[1](() => {
                    return {
                        visibility: false
                    }
                })
                //After receiving the razorpay order details, create an options object to fit into the razorpay client sdk
                const rpOptions = {
                    key: serverResponse?.data?.payload?.key,
                    amount: serverResponse?.data?.payload?.razorpayOrder?.amount,
                    currency: serverResponse?.data?.payload?.razorpayOrder?.currency,
                    order_id: serverResponse?.data?.payload?.razorpayOrder?.id,
                    prefill: serverResponse?.data?.payload?.prefill,
                    description: "Thank you for choosing erida",
                    callback_url: "http://localhost:3000"
                }

                //Finally call the sdk
                new window.Razorpay(rpOptions).open()
            }
            catch(error){
                hocDisplayControls[1](() => {
                    return {
                        visibility: false
                    }
                })
                if (error.response.status === 498) return reloadWindow()
                if (error?.response?.status === 499) removeDepreciatedSST()
    
                infoDisplayControls[1](() => {
                    return {
                        visibility: true,
                        message: error?.response?.data?.error,
                        color: "#ff5757bb"
                    }
                })
                setTimeout(() => {
                    infoDisplayControls[1](previous => {
                        return {
                            ...previous,
                            visibility: false,
                        }
                    })
                }, 2000)
            }
        }
        catch (error) {
            infoDisplayControls[1](() => {
                return {
                    visibility: true,
                    message: error,
                    color: "#ff5757bb"
                }
            })
            setTimeout(() => {
                infoDisplayControls[1](previous => {
                    return {
                        ...previous,
                        visibility: false,
                    }
                })
            }, 2000)
        }
    }

    return (
        <div className="orderCard">
            {detailsModalVisibile ? <OrderDetailsModal details={orderDetails} closeModal={() => setDetailsModalVisibility(() => false)} /> : ""}
            <div className="orderCard__orderId">
                <p><b>ID: </b>{orderDetails.orderId}</p>
            </div>
            <div className="orderCard__orderType">
                <p><b>Type: </b>{orderDetails.orderType}</p>
            </div>
            <div className="orderCard__orderTotal">
                <p><b>Total: </b> INR {orderDetails.orderValue}</p>
            </div>
            <div className="orderCard__orderStatus">
                <p><b>Status: </b> {orderDetails.orderStatus}</p>
            </div>
            <div className="orderCard__orderDate">
                <p><b>Date: </b> {new Date(orderDetails.createdAt).toDateString()}</p>
            </div>
            <div className="orderCard__orderDetailsBtn"><ButtonRound
                className="--noBorder"
                onClick={() => setDetailsModalVisibility(() => true)}
                content="Details"
                fontSize="12px"
                fontWeight="600"
                lineHeight="16px"
                width="80px"
                height="30px"
                margin="10px auto"
                color="white"
                backgroundColor="#4079e3"
            /></div>
            <div className="orderCard__orderPayBtn"><ButtonRound
                className="--noBorder"
                onClick={orderDetails.paymentCompleted ? () => {} : () => displayRazorpayModal(orderDetails._id)}
                content={orderDetails.paymentCompleted ? "Paid" : "Pay"}
                fontSize="12px"
                fontWeight="600"
                lineHeight="16px"
                width="80px"
                height="30px"
                margin="10px auto"
                color="white"
                opacity={orderDetails.paymentCompleted ? 0.3 : 1}
                backgroundColor="#4ae340"
            /></div>
        </div>
    )
}

export default OrderCard