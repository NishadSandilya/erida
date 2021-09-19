//This is the remote troubleshooting page
import Text from './Text'
import ImageWrapper from './ImageWrapper'
import servicesAsset1 from '../cdn/images/servicesAsset2.png'
import remoteFixAsset1 from '../cdn/images/remoteFixAsset1.PNG'
import remoteFixAsset2 from '../cdn/images/remoteFixAsset2.PNG'
import remoteFixAsset3 from '../cdn/images/remoteFixAsset3.PNG'
import remoteFixAsset4 from '../cdn/images/remoteFixAsset4.png'
import ButtonSquared from './ButtonSquared'
import { useState } from 'react'
import BookRFModal from './BookRFModal'
//The primary functional component here
const RemoteFix = () => {
    const [modalHere, setModalHere] = useState(false)
    const [spinner, setSpinner] = useState(false)
    return (
        <div className="App__remoteFix">
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
                content="Want to get you computer fixed from the comfort of your home? Follow the steps below and we will fix your computer. Please note that this is only for software issues like (Audio and Video Issues, Storage and Junk Cleanup, Corrupt Drivers, etc.) and not hardware issues."
                fontSize="14px"
                width="70vw"
                margin="1vh 0 0 0"
                lineHeight="22px"
                color="#707070"
                textAlign="left"
            />
            <ImageWrapper
                imageSource = {remoteFixAsset1}
                margin="10vh 0 0 0"
                alternateName="HomeAsset1"
                imageWidth="250px"
                borderRadius = "15px"
            />
            <Text
                content="1. Install Anydesk on your PC"
                fontSize="16px"
                width="70vw"
                margin="2.5vh 0 0 0"
                lineHeight="22px"
                color="#707070"
                textAlign="left"
                fontWeight="500"
            />
            <Text
                content="This is the platform where you we will be providing you with the support and remote services. Install it by clicking below
                "
                fontSize="12px"
                width="70vw"
                margin="1vh 0 0 0"
                lineHeight="18px"
                color="#707070"
                textAlign="left"
            />
            <ButtonSquared
                    content="Download"
                    backgroundColor="black"
                    fontSize="12px"
                    fontWeight="600"
                    lineHeight="16px"
                    color="white"
                    width = "30vw"
                    padding="3vw"
                    margin="3vh 5vw 0 0"
            />
            <ImageWrapper
                imageSource = {remoteFixAsset2}
                margin="5vh 0 0 0"
                alternateName="HomeAsset1"
                imageWidth="250px"
                borderRadius = "15px"
            />
            <Text
                content="2. Open Anydesk on you PC"
                fontSize="16px"
                width="70vw"
                margin="2.5vh 0 0 0"
                lineHeight="22px"
                color="#707070"
                textAlign="left"
                fontWeight="500"
            />
            <Text
                content="This is the screen that you will be greeted with the first time you open Anydesk. That's it you are all done with the basics.
                "
                fontSize="12px"
                width="70vw"
                margin="1vh 0 0 0"
                lineHeight="18px"
                color="#707070"
                textAlign="left"
            />
            <ImageWrapper
                imageSource = {remoteFixAsset3}
                margin="5vh 0 0 0"
                alternateName="HomeAsset1"
                imageWidth="250px"
                borderRadius = "15px"
            />
            <Text
                content="3. Note down the client code"
                fontSize="16px"
                width="70vw"
                margin="2.5vh 0 0 0"
                lineHeight="22px"
                color="#707070"
                textAlign="left"
                fontWeight="500"
            />
            <Text
                content="Perhaps the most important step. You have to note down the 9-digit code as shown in the above image. This is the code that you have to enter the form that you need to submit us to book a service session.
                "
                fontSize="12px"
                width="70vw"
                margin="1vh 0 0 0"
                lineHeight="18px"
                color="#707070"
                textAlign="left"
            />
            <ImageWrapper
                imageSource = {remoteFixAsset4}
                margin="5vh 0 0 0"
                alternateName="HomeAsset1"
                imageWidth="150px"
                borderRadius = "15px"
            />
            <Text
                content="4. Book a remote service session below"
                fontSize="16px"
                width="70vw"
                margin="2.5vh 0 0 0"
                lineHeight="22px"
                color="#707070"
                textAlign="left"
                fontWeight="500"
            />
            <Text
                content="Click on Book Now to book an online remote service session. You will be asked to fill a form. Keep your Desk Code ready we talked about previously. Once booked, you will get a call from us and we will guide you through the entire process.
                "
                fontSize="12px"
                width="70vw"
                margin="1vh 0 0 0"
                lineHeight="18px"
                color="#707070"
                textAlign="left"
            />
            <ButtonSquared 
                    onClick = {() => setModalHere(() => true)}
                    content="Book Now"
                    backgroundColor="black"
                    fontSize="12px"
                    fontWeight="600"
                    lineHeight="16px"
                    color="white"
                    width = "30vw"
                    padding="3vw"
                    margin="3vh 5vw 3vh 0"
                />
            
            {modalHere && <BookRFModal closeRfModal = {() => setModalHere(() => false)}/>}
        </div>
    )
}

//Default export
export default RemoteFix