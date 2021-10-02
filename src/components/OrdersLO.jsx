import axios from 'axios'
import { useContext, useEffect } from 'react'
import { AppContext } from './Data'

import Text from "./Text"
import ImageWrapper from "./ImageWrapper"
import ButtonSquared from "./ButtonSquared"
import userOrders from "../cdn/images/userOrders.png"

const OrdersLO = () => {
    const [, { loginDisplayControls }] = useContext(AppContext)
    return (
        <div className="orders__ordersLo">
            <ImageWrapper
                imageSource={userOrders}
                margin="5vh 0 0 0"
                alternateName="HomeAsset1"
                imageWidth="250px"
            />
            <Text
                content="Don't miss out on your orders with erida!"
                fontSize="18px"
                width="70vw"
                margin="5vh 0 0 0"
                lineHeight="28px"
                color="#707070"
                textAlign="center"
                fontWeight="500"
            />
            <Text
                content="Login or signup using just your phone now to gain access to all the order you have made with erida or make a new order. See order details, pay from here and do much more"
                fontSize="14px"
                width="70vw"
                margin="1vh 0 0 0"
                lineHeight="22px"
                color="#707070"
                textAlign="center"
            />
            <ButtonSquared
                onClick={() => {
                    loginDisplayControls[1](previous => {
                        return {
                            ...previous,
                            loginModalVisibility: true
                        }
                    })
                }}
                content="Login/Signup"
                backgroundColor="black"
                fontSize="12px"
                fontWeight="600"
                lineHeight="16px"
                color="white"
                padding="3vw"
                // width = "100px"
                margin="3vh 0 3vh 0"
            />
        </div>
    )
}

export default OrdersLO