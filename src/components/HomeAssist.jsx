//This is the remote troubleshooting page
import Text from './Text'
import ImageWrapper from './ImageWrapper'
import homeAssist from '../cdn/images/homeAssist.png'
import ButtonSquared from './ButtonSquared'
import { useState, useContext } from 'react'
import { AppContext } from './Data'
import { pingServer } from './pingServer'
import HAModal from './HAModal'
//The primary functional component here
const HomeAssist = () => {

    const [{infoDisplayControls}, {loginDisplayControls}] = useContext(AppContext)

    const [showOrderModal, setShowOrderModal] = useState(false)

    //Button characteristics
    const onPlaceOrder = async() => {
        if(!await pingServer()){
            loginDisplayControls[1](previous => {
                return{
                    ...previous,
                    loginModalVisibility: true
                }
            })
            infoDisplayControls[1](() => {
                return {
                    visibility: true,
                    message: "You have to be logged in to place an order",
                    color: "#AD4EFFbb"
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
        else setShowOrderModal(() => true)
    }

    return (
        <div className="App__remoteFix">
            {showOrderModal ? <HAModal closeModal = {() => setShowOrderModal(() => false)}/> : ""}
            <ImageWrapper
                imageSource={homeAssist}
                margin="5vh 0 0 0"
                alternateName="HomeAsset1"
                imageWidth="250px"
            />
            <Text
                content="Home Assistance, Troubleshooting"
                fontSize="18px"
                width="70vw"
                margin="5vh 0 0 0"
                lineHeight="28px"
                color="#707070"
                textAlign="center"
                fontWeight="500"
            />
            <Text
                content="If your location falls within 10 Kms of erida, we will fix your PC without you needing to come to our service stations. Just place an order describing the issue briefly and we will come and diagnose your PC, hence fix it"
                fontSize="14px"
                width="70vw"
                margin="1vh 0 0 0"
                lineHeight="22px"
                color="#707070"
                textAlign="center"
            />
            <ButtonSquared 
                    onClick = {onPlaceOrder}
                    content="Place order"
                    backgroundColor="black"
                    fontSize="12px"
                    fontWeight="600"
                    lineHeight="16px"
                    color="white"
                    width = "30vw"
                    padding="3vw"
                    margin="3vh 0 3vh 0"
                />
            <Text
                content="Important!"
                fontSize="16px"
                width="70vw"
                margin="5vh 0 0 0"
                lineHeight="22px"
                color="#ff7e7e"
                textAlign="center"
                fontWeight="500"
            />
            <Text
                content="All services of erida are eligible for Home servicing. Base price, INR 99 for within 5 Kms and INR 199 for within 10 Kms (Non-Refundable and Mandatory), price of services are extras. Extras won't be charged if problem's not solved"
                fontSize="12px"
                width="70vw"
                margin="1vh 0 10vh 0"
                lineHeight="18px"
                color="#a8a8a8"
                textAlign="center"
            />
        </div>
    )
}

//Default export
export default HomeAssist