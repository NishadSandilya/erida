//The home component

import Text from "./Text"
import cloudImg from "../cdn/images/cloud.png"
import ImageWrapper from "./ImageWrapper"
import firstPicHome from "../cdn/images/firstPic.png"
import secondPicHome from "../cdn/images/secondPic.png"
import thirdPicHome from "../cdn/images/thirdPic.png"
import guideFirstPic from "../cdn/images/guideFirstPic.png"
import guideSecondPic from "../cdn/images/guideSecondPic.png"
import guideThirdPic from "../cdn/images/guideThirdPic.png"
import ButtonSquared from "./ButtonSquared"
import { Link } from "react-router-dom"

//Describe the Home component
const Home = () => {
    return (
        <div className="App__home">
            <div className="App__home__cloudImgWrapper">
                <img className="App__home__cloudImgWrapper__asset1" src={cloudImg} alt="CloudAsset1" width="220" />
                <img className="App__home__cloudImgWrapper__asset2" src={cloudImg} alt="CloudAsset2" width="180" />
            </div>
            <Text
                content="PC Services Re-defined"
                fontSize="32px"
                width="50vw"
                margin="5vh 0 0 0"
                lineHeight="46px"
                color="#707070"
                textAlign="center"
            />
            <Text
                content="Welcome to Nagaon's first Semi-Automated, Affordable and reliant Computer Service Platform"
                fontSize="16px"
                width="70vw"
                margin="2.5vh 0 0 0"
                lineHeight="24px"
                color="#707070"
                textAlign="center"
            />
            <ImageWrapper
                imageSource={firstPicHome}
                margin="5vh 0 0 0"
                alternateName="HomeAsset1"
                imageWidth="300px"
            />
            <Text
                content="Revolutionizing the PC Service Experience in Nagaon"
                fontSize="18px"
                width="70vw"
                margin="10vh 0 0 0"
                lineHeight="28px"
                color="#707070"
                textAlign="center"
                fontWeight="500"
            />
            <Text
                content="With a semi-automated platform where you can either opt for a walk-in service or an online remote service and even book a home service at the cheapest rates ever, erida plans to change how you think of the PC world. Get your PC servicing Done today professionally and authentically with erida."
                fontSize="14px"
                width="70vw"
                margin="1vh 0 0 0"
                lineHeight="22px"
                color="#707070"
                textAlign="center"
            />
            <ImageWrapper
                imageSource={secondPicHome}
                margin="5vh 0 0 0"
                alternateName="HomeAsset1"
                imageWidth="300px"
            />
            <Text
                content="Don't Believe? See How it Works"
                fontSize="18px"
                width="43vw"
                margin="10vh 0 0 0"
                lineHeight="28px"
                color="#707070"
                textAlign="center"
                fontWeight="500"
            />
            <div className="App__home__leftSideGuide">
                <ImageWrapper
                    imageSource={guideFirstPic}
                    alternateName="HomeAsset1"
                    imageWidth="140"
                    others={
                        {
                            position: "absolute",
                            top: 0,
                            left: 0
                        }
                    }
                />
                <Text
                    content="1"
                    fontSize="64px"
                    lineHeight="88px"
                    color="#707070"
                    fontWeight="500"
                    others={{
                        position: "absolute",
                        bottom: "35%",
                        right: "0"
                    }}
                />
                <Text
                    content="Browse the Required service in our web app
                    The prices are super 
                    affordable BTW"
                    fontSize="14px"
                    lineHeight="22px"
                    color="#707070"
                    fontWeight="400"
                    width="55%"
                    textAlign="right"
                    others={{
                        position: "absolute",
                        bottom: "5%",
                        right: "0"
                    }}
                />
            </div>
            <div className="App__home__leftSideGuide">
                <ImageWrapper
                    imageSource={guideSecondPic}
                    alternateName="HomeAsset1"
                    imageWidth="140"
                    others={
                        {
                            position: "absolute",
                            top: 0,
                            right: 0
                        }
                    }
                />
                <Text
                    content="2"
                    fontSize="64px"
                    lineHeight="88px"
                    color="#707070"
                    fontWeight="500"
                    others={{
                        position: "absolute",
                        bottom: "30%",
                        left: "0"
                    }}
                />
                <Text
                    content="Opt for a walk-in service, or book online to fix your computer from home"
                    fontSize="14px"
                    lineHeight="22px"
                    color="#707070"
                    fontWeight="400"
                    width="55%"
                    textAlign="left"
                    others={{
                        position: "absolute",
                        bottom: "5%",
                        left: "0"
                    }}
                />
            </div>
            <div className="App__home__leftSideGuide">
                <ImageWrapper
                    imageSource={guideThirdPic}
                    alternateName="HomeAsset1"
                    imageWidth="180"
                    others={
                        {
                            position: "absolute",
                            top: 0,
                            left: 0
                        }
                    }
                />
                <Text
                    content="3"
                    fontSize="64px"
                    lineHeight="88px"
                    color="#707070"
                    fontWeight="500"
                    others={{
                        position: "absolute",
                        bottom: "38%",
                        right: "0"
                    }}
                />
                <Text
                    content="That's it. We will inform you once the service is done gracefully"
                    fontSize="14px"
                    lineHeight="22px"
                    color="#707070"
                    fontWeight="400"
                    width="55%"
                    textAlign="right"
                    others={{
                        position: "absolute",
                        bottom: "5%",
                        right: "0"
                    }}
                />
            </div>
            <Text
                content="See!
                It's that Simple"
                fontSize="18px"
                width="50vw"
                margin="10vh 0 0 0"
                lineHeight="28px"
                color="#707070"
                textAlign="center"
                fontWeight="500"
            />
            <Text
                content="Got the hang of it? Great, now you can
                browse our PC services and Browse the
                required ones."
                fontSize="14px"
                width="70vw"
                margin="1vh 0 0 0"
                lineHeight="22px"
                color="#707070"
                textAlign="center"
            />
            <Link to="/services">
                <ButtonSquared
                    content="Browse Services"
                    backgroundColor="#3991E9"
                    fontSize="12px"
                    fontWeight="600"
                    lineHeight="16px"
                    color="white"
                    padding="3vw 4vw"
                    margin="3vh 0 0 0"
                />
            </Link>
            <ImageWrapper
                imageSource={thirdPicHome}
                margin="10vh 0 0 0"
                alternateName="HomeAsset1"
                imageWidth="250px"
            />
            <Text
                content="Still Confused? Umm..."
                fontSize="18px"
                width="50vw"
                margin="2.5vh 0 0 0"
                lineHeight="28px"
                color="#707070"
                textAlign="center"
                fontWeight="500"
            />
            <Text
                content="Not used to the Online way of 
                doing things? Get face to face 
                with us and we will help you 
                solve your tech problems"
                fontSize="14px"
                width="70vw"
                margin="1vh 0 0 0"
                lineHeight="22px"
                color="#707070"
                textAlign="center"
            />
            <a href="https://www.google.com/maps?q=26.356353309557353,92.69183782580016&hl=en">
                <ButtonSquared
                    content="Take me to erida"
                    backgroundColor="#4C50EF"
                    fontSize="12px"
                    fontWeight="600"
                    lineHeight="16px"
                    color="white"
                    padding="3vw 4vw"
                    margin="3vh 0 10vh 0"
                />
            </a>

        </div>
    )
}

//Default Export Home
export default Home