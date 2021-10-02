//This is the support page
import Logo from "./Logo"
import Menu from "./MenuBtn"
import Text from "./Text"

import ImageWrapper from "./ImageWrapper"
import ButtonSquared from "./ButtonSquared"

import supportAsset1 from '../cdn/images/supportAsset1.png'
//Functional component here
const Support = () => {
    return (
        <div className="App__support">
            <ImageWrapper
                imageSource={supportAsset1}
                margin="5vh 0 0 0"
                alternateName="HomeAsset1"
                imageWidth="250px"
            />
            <Text
                content="Need Tech
                Support?"
                fontSize="18px"
                width="70vw"
                margin="10vh 0 0 0"
                lineHeight="28px"
                color="#707070"
                textAlign="center"
                fontWeight="500"
            />
            <Text
                content="At erida, we are forever ready to
                answer your questions and clear 
                your doubts. Need tech support
                of any kind, we have got you 
                covered"
                fontSize="14px"
                width="70vw"
                margin="1vh 0 0 0"
                lineHeight="22px"
                color="#707070"
                textAlign="center"
            />
            <div className="App__support__buttonGroup">
                <a href="tel:8638779180">
                    <ButtonSquared
                        content="Call Us"
                        backgroundColor="#4C50EF"
                        fontSize="12px"
                        fontWeight="600"
                        lineHeight="16px"
                        color="white"
                        padding="3vw 6vw"
                        margin="3vh 5vw 0 0"
                    />
                </a>
                <a href="mailto:support@erida.in">
                    <ButtonSquared
                        content="Mail Us"
                        backgroundColor="#4C50EF"
                        fontSize="12px"
                        fontWeight="600"
                        lineHeight="16px"
                        color="white"
                        padding="3vw 6vw"
                        margin="3vh 0 0 0"
                    /></a>
            </div>
            <Text
                content="Visit us at"
                fontSize="18px"
                width="70vw"
                margin="10vh 0 0 0"
                lineHeight="28px"
                color="#707070"
                textAlign="center"
                fontWeight="500"
            />
            <Text
                content="Madhuban Colony,
                Amolapatty Natyamandir,
                Nagaon 782001, Assam"
                fontSize="14px"
                width="70vw"
                margin="1vh 0 0 0"
                lineHeight="22px"
                color="#707070"
                textAlign="center"
            />
            <a href="https://www.google.com/maps?q=26.356353309557353,92.69183782580016&hl=en">
                <ButtonSquared
                    content="Locate us on the map"
                    backgroundColor="#191847"
                    fontSize="12px"
                    fontWeight="600"
                    lineHeight="16px"
                    color="white"
                    padding="3vw 6vw"
                    margin="3vh 0 10vh 0"
                />
            </a>
        </div>
    )
}

//Default export
export default Support