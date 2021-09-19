//The Leagal component here
import Logo from "./Logo"
import Menu from "./MenuBtn"
import Text from "./Text"

import ImageWrapper from "./ImageWrapper"
import ButtonSquared from "./ButtonSquared"
import legalAsset1 from "../cdn/images/legalAsset1.png"
//The functional component here
const Legal = () => {
    return (
        <div className="App__legal">
            <ImageWrapper
                imageSource={legalAsset1}
                margin="5vh 0 0 0"
                alternateName="HomeAsset1"
                imageWidth="200px"
            />
            <Text
                content="Legal"
                fontSize="18px"
                width="70vw"
                margin="5vh 0 0 0"
                lineHeight="28px"
                color="#707070"
                textAlign="center"
                fontWeight="500"
            />
            <Text
                content="Please click on the below policies to view
                them in a pdf format"
                fontSize="14px"
                width="70vw"
                margin="1vh 0 0 0"
                lineHeight="22px"
                color="#707070"
                textAlign="center"
            />
            <div className="App__legal__buttonGroup">
                <ButtonSquared
                    content="Privacy Policy"
                    backgroundColor="black"
                    fontSize="12px"
                    fontWeight="600"
                    lineHeight="16px"
                    color="white"
                    width = "30vw"
                    padding="3vw"
                    margin="3vh 5vw 0 0"
                />
                <ButtonSquared
                    content="Terms of Use"
                    backgroundColor="black"
                    fontSize="12px"
                    fontWeight="600"
                    lineHeight="16px"
                    color="white"
                    padding="3vw"
                    width = "30vw"
                    margin="3vh 0 0 0"
                />
            </div>
            <div className="App__legal__buttonGroup">
                <ButtonSquared
                    content="Disclaimer"
                    backgroundColor="black"
                    fontSize="12px"
                    fontWeight="600"
                    lineHeight="16px"
                    color="white"
                    padding="3vw"
                    width = "30vw"
                    margin="3vh 5vw 0 0"
                />
                <ButtonSquared
                    content="Privacy Policy"
                    backgroundColor="black"
                    fontSize="12px"
                    fontWeight="600"
                    lineHeight="16px"
                    color="white"
                    padding="3vw"
                    width = "30vw"
                    margin="3vh 0 0 0"
                />
            </div>
        </div>
    )
}

//Default export
export default Legal