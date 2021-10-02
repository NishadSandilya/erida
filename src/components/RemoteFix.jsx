//This is the remote troubleshooting page
import Text from './Text'
import ImageWrapper from './ImageWrapper'
import servicesAsset1 from '../cdn/images/servicesAsset2.png'
import remoteFixAsset1 from '../cdn/images/remoteFixAsset1.PNG'
import remoteFixAsset2 from '../cdn/images/remoteFixAsset2.PNG'
import remoteFixAsset3 from '../cdn/images/remoteFixAsset3.PNG'
import remoteFixAsset4 from '../cdn/images/remoteFixAsset4.png'
import ButtonSquared from './ButtonSquared'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from './Data'
import { pingServer } from './pingServer'
import RFModal from './RFModal'

//The primary functional component here
const RemoteFix = () => {
    const [{infoDisplayControls}, {loginDisplayControls}, {hocDisplayControls}] = useContext(AppContext)

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
            {showOrderModal ? <RFModal closeModal = {() => setShowOrderModal(() => false)}/> : ""}
            <ImageWrapper
                imageSource={servicesAsset1}
                margin="5vh 0 0 0"
                alternateName="HomeAsset1"
                imageWidth="250px"
            />
            <Text
                content="Remote computer Fixes"
                fontSize="18px"
                width="70vw"
                margin="5vh 0 0 0"
                lineHeight="28px"
                color="#707070"
                textAlign="center"
                fontWeight="500"
            />
            <Text
                content="Want to get your PC fixed from home in Nagaon? Don't worry, we will do it for you. Just place an order below, after which our associate will contact you shortly and guide you through the entire process."
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
                content="Remote troubleshooting is for software issues only. A stable internet connection is required. Base price, INR 29 (Non-refundable and Mandatory), extras till INR 199 based on complexity. Extras won't be charged if problem's not solved"
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
export default RemoteFix