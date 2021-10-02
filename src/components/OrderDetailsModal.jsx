import closeBtnWhite from "../cdn/images/closeBtnWhite.png"
import ImageWrapper from "./ImageWrapper"
import { useContext, useEffect, useState } from "react"
import Text from "./Text"
import Plans from "./Plans"
import Affiliate from "../cdn/images/Affiliate.png"
import Items from "./Items"
import { pingServer } from "./pingServer"
import { AppContext } from "./Data"
import { reloadWindow } from "./windowReload"
const OrderDetailsModal = ({ details, closeModal }) => {

    const [{infoDisplayControls}] = useContext(AppContext)

    useEffect(async() => {
        if(!await pingServer()){
            reloadWindow()
            infoDisplayControls[1](() => {
                return {
                    visibility: true,
                    message: "Secure Session Expired. Please Log-in again",
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
            }, 3000)
        }
    }, [])

    return (
        <div className="orderDetailsModal" >
            <div onClick={closeModal} className="orderDetailsModal__close-btn">
                <ImageWrapper
                    imageSource={closeBtnWhite}
                    margin="0 0 0 0"
                    alternateName="HomeAsset1"
                    imageWidth="36px"
                />
            </div>
            <div className="orderDetailsModal__Wrapper">
                <div className="orderDetailsModal__Wrapper__hero">
                </div>
                <Text
                    content={`Order Details for Order ID: ${details.orderId}`}
                    fontSize="22px"
                    width="70vw"
                    margin="10vh 0 5vh 0"
                    lineHeight="30px"
                    color="#707070"
                    textAlign="center"
                    fontWeight="500"
                />
                {details.items.map(item => {
                    return <Items key = {item.item} item={item.item} price={item.value} qty={item.quantity} />
                })}
                <div style={{ marginTop: "2vh" }}></div> 
                {details.firstname ? <p className="orderDetailsModal__content">
                    <b>Name: </b>{details.firstname + " " + details.lastname}
                </p> : ""}
                {details.email ? <p className="orderDetailsModal__content">
                    <b>Email: </b>{details.email}
                </p> : ""}
                {details.address ? <p className="orderDetailsModal__content">
                    <b>Billing Address: </b>{details.address}
                </p> : ""}
                {details.userNotes ? <p className="orderDetailsModal__content">
                    <b>User Notes: </b>{details.userNotes}
                </p> : ""}
                <p className="orderDetailsModal__content">
                    <b>Phone: </b>{details.phone}
                </p>
                <p className="orderDetailsModal__content">
                    <b>Order Date: </b>{new Date(details.createdAt).toDateString()}
                </p>
                <p className="orderDetailsModal__content">
                    <b>Order Status: </b>{details.orderStatus}
                </p>
                <p className="orderDetailsModal__content">
                    <b>Order Type: </b>{details.orderType}
                </p>
                <p className="orderDetailsModal__content">
                    <b>Order Total: </b> INR {details.orderValue}
                </p>
                <p className="orderDetailsModal__content">
                    <b>Payment Made? </b>{details.paymentCompleted ? "Yes" : "No"}
                </p>
                {details.paymentMode ? <p className="orderDetailsModal__content">
                    <b>Payment Mode: </b>{details.paymentMode}
                </p> : ""}
                {details.razorpayPaymentId ? <p className="orderDetailsModal__content">
                    <b>Razorpay Payment_id: </b>{details.razorpayPaymentId}
                </p> : ""}
                <div style={{ marginTop: "5vh" }}></div>             
            </div>
        </div>
    )
}

export default OrderDetailsModal