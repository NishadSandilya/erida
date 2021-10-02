//This is the default user page (Not login)
import axios from 'axios'
import { useContext, useEffect } from 'react'
import { AppContext } from './Data'

import Text from "./Text"
import ImageWrapper from "./ImageWrapper"
import ButtonSquared from "./ButtonSquared"
import userAccount from "../cdn/images/userAccount.png"
//Functional component here
const UserLO = () => {

    //Get appcontext
    const [ ,{loginDisplayControls}] = useContext(AppContext)

    return (
        <div className="userLo">
            <ImageWrapper
                imageSource={userAccount}
                margin="5vh 0 0 0"
                alternateName="HomeAsset1"
                imageWidth="250px"
            />
            <Text
                content="Access erida's user console by logging in"
                fontSize="18px"
                width="70vw"
                margin="5vh 0 0 0"
                lineHeight="28px"
                color="#707070"
                textAlign="center"
                fontWeight="500"
            />
            <Text
                content="Passwordless erida! Seems easy enough? It indeed is. Just use your phone and an OTP to get in and access services and orders"
                fontSize="14px"
                width="70vw"
                margin="1vh 0 0 0"
                lineHeight="22px"
                color="#707070"
                textAlign="center"
            />
            <ButtonSquared
                onClick = {() => {
                    loginDisplayControls[1](previous => {
                        return{
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

export default UserLO