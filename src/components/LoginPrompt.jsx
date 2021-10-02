//This is the user console
import Text from "./Text"
import ImageWrapper from "./ImageWrapper"
import userAsset from "../cdn/images/userAsset.png"
import ButtonSquared from './ButtonSquared'
import { useContext, useState } from "react"
import { AppContext } from "./Data"
import closeBtnWhite from "../cdn/images/closeBtnWhite.png"

//Primary functional component here
const LoginPrompt = () => {
    const [{ loginModalControls }] = useContext(AppContext)
    return (
        <div className="login-prompt">
            <div onClick={() => loginModalControls[1](previous => {
                return {
                    ...previous,
                    loginPromptvisibility: false
                }
            })} className="login-prompt__close-btn">
                <ImageWrapper
                    imageSource={closeBtnWhite}
                    margin="0 0 0 0"
                    alternateName="HomeAsset1"
                    imageWidth="36px"
                />
            </div>
            <ImageWrapper
                imageSource={userAsset}
                margin="15vh 0 0 0"
                alternateName="HomeAsset1"
                imageWidth="350px"
            />
            <Text
                content="You need to login first to access this"
                fontSize="18px"
                width="70vw"
                margin="5vh 0 0 0"
                lineHeight="28px"
                color="#707070"
                textAlign="center"
                fontWeight="500"
            />
            <Text
                content="Click below to access erida. There is no signup, just your phone and an OTP will get you in."
                fontSize="14px"
                width="70vw"
                margin="1vh 0 0 0"
                lineHeight="22px"
                color="#707070"
                textAlign="center"
            />
            <ButtonSquared
                content="Login now"
                backgroundColor="black"
                fontSize="12px"
                fontWeight="600"
                lineHeight="16px"
                color="white"
                padding="3vw"
                margin="3vh 0 3vh 0"
            />
        </div>
    )
}

//Default export
export default LoginPrompt