import { useContext, useEffect, useState } from "react"
import { AppContext } from "./Data"
import Text from "./Text"
import ImageWrapper from "./ImageWrapper"
import ButtonRound from "./ButtonRound"
import userOrdersLI from "../cdn/images/userOrdersLI.png"
import axios from 'axios'
import { reloadWindow } from "./windowReload"
import { Link } from "react-router-dom"
import ButtonSquared from "./ButtonSquared"
import OrderCard from "./OrderCard"
import { removeDepreciatedSST } from "./pingServer"



//define the razorpay client side options


const OrdersLI = () => {
    const [{ infoDisplayControls }, , {hocDisplayControls}] = useContext(AppContext)

    const [refresh, setRefresh] = useState(true)

    const [dataHere, setDataHere] = useState([])

    const serverREQ = async () => {
        try {
            hocDisplayControls[1](() => {
                return {
                    visibility: true
                }
            })
            const serverResponse = await axios({
                method: 'get',
                withCredentials: true,
                url: 'http://localhost:8000/v1/users/me/orders'
            })
            hocDisplayControls[1](() => {
                return {
                    visibility: false
                }
            })
            setDataHere(() => serverResponse?.data?.payload)
        }
        catch (error) {
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

    useEffect(() => {
        serverREQ()
    }, [refresh])

    return (
        <div className="orders__ordersLi">
            <ImageWrapper
                imageSource={userOrdersLI}
                margin="5vh 0 0 0"
                alternateName="HomeAsset1"
                imageWidth="300px"
            />
            <Text
                content="Your Orders"
                fontSize="22px"
                width="70vw"
                margin="5vh 0 0 0"
                lineHeight="30px"
                color="#707070"
                textAlign="center"
                fontWeight="500"
            />
            {dataHere.length ? <Text
                content="Showing you your 20 most recent orders. Contact support if you want information about your past orders"
                fontSize="14px"
                width="70vw"
                margin="1vh 0 3vh 0"
                lineHeight="22px"
                color="#707070"
                textAlign="center"
            /> : ""}
            {dataHere.map(order => {
                return <OrderCard key={order.orderId} orderDetails={order} />
            })}
            <div style={{ marginBottom: "10vh" }}></div>
            {dataHere.length ? "" : <div><Text
                content="Seems like you have not made any orders with us yet. Why don't you browse our services? Maybe you will start liking us more"
                fontSize="14px"
                width="70vw"
                margin="1vh 0 0 0"
                lineHeight="22px"
                color="#707070"
                textAlign="center"
            />
                <Link to='/services'>
                    <ButtonSquared
                        content="Browse Services"
                        backgroundColor="black"
                        fontSize="12px"
                        fontWeight="600"
                        lineHeight="16px"
                        color="white"
                        padding="3vw"
                        margin="3vh auto"
                        width="fit-content"
                    />
                </Link></div>}
        </div>
    )
}

export default OrdersLI