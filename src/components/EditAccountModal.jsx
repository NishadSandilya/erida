import ImageWrapper from "./ImageWrapper"
import closeBtnWhite from "../cdn/images/closeBtnWhite.png"
import { useState, useEffect, useContext } from "react"
import ButtonSquared from "./ButtonSquared"
import ButtonRound from "./ButtonRound"
import NameUpdate from "./NameUpdate"
import PhoneUpdate from "./PhoneUpdate"
import { pingServer } from "./pingServer"
import { AppContext } from "./Data"
import { reloadWindow } from "./windowReload"

const EditAccountModal = ({closeModal, logOut}) => {
    const [dim, setDim] = useState({ height: window.innerHeight, width: window.innerWidth })

    const [{infoDisplayControls}] = useContext(AppContext)

    const [nameForm, setNameForm] = useState(true)

    const updateWidthAndHeight = () => {
        setDim(() => {
            return {
                height: window.innerHeight,
                width: window.innerWidth
            }
        })
    }

    useEffect(async() => {
        if(!await pingServer()){
            reloadWindow()
            infoDisplayControls[1](() => {
                return {
                    visibility: true,
                    message: "There was an issue with the account. Please contact support",
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

    useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => window.removeEventListener("resize", updateWidthAndHeight);
    });
    return(
        <div className="editAccountModal">
            <div onClick = {closeModal} className="editAccountModal__close-btn">
            <ImageWrapper
                    imageSource={closeBtnWhite}
                    margin="0 0 0 0"
                    alternateName="HomeAsset1"
                    imageWidth="36px"
                />
            </div>
            <div className="editAccountModal__forms">
                {nameForm ? <NameUpdate closeModal = {closeModal}/> : <PhoneUpdate logOut = {logOut} closeModal = {closeModal}/>}
            </div>
            <div className="editAccountModal__btn-group" style = {{
                display: dim.height <=500 ? "none" : "block"
            }}>
            <ButtonRound
                onClick = {() => setNameForm(() => true)}
                content="Update name"
                fontSize="12px"
                fontWeight="600"
                lineHeight="16px"
                padding="3vw"
                margin="0vh 0 0 0"
                backgroundColor = {nameForm ? "#000000" : "#ffffff"}
                color = {nameForm ? "#ffffff" : "#000000"}
            />
            <ButtonRound
                onClick = {() => setNameForm(() => false)}
                content="Update phone"
                fontSize="12px"
                fontWeight="600"
                lineHeight="16px"
                padding="3vw"
                margin="1.5vh 0 0 0"
                backgroundColor = {!nameForm ? "#000000" : "#ffffff"}
                color = {!nameForm ? "#ffffff" : "#000000"}
            />
            </div>            
        </div>
    )
}

export default EditAccountModal