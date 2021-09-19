//The about us component
import Logo from "./Logo"
import Menu from "./MenuBtn"
import Text from "./Text"

import ImageWrapper from "./ImageWrapper"
import ButtonSquared from "./ButtonSquared"
import aboutAsset1 from "../cdn/images/aboutAsset1.png"
import aboutAsset2 from "../cdn/images/aboutAsset2.png"
import aboutAsset3 from "../cdn/images/aboutAsset3.png"
import aboutAsset4 from "../cdn/images/aboutAsset4.png"
//The functional component here
const About = () => {
    return (
        <div className="App__about">
            <ImageWrapper
                imageSource={aboutAsset1}
                margin="5vh 0 0 0"
                alternateName="HomeAsset1"
                imageWidth="250px"
            />
            <Text
                content="Who we are?"
                fontSize="18px"
                width="70vw"
                margin="5vh 0 0 0"
                lineHeight="28px"
                color="#707070"
                textAlign="center"
                fontWeight="500"
            />
            <Text
                content="We are a team of Professionals trying to help common people with tech to the best we can. We 
                have Developers, Analysts, AI-Enthusiasts, 
                Designers, Hardware and Software 
                Enthusiasts collaborating with us. We have over 9 years of experience in the field of Computer Hardware and troubleshooting and over 4 years of experience as developers and active problem solvers"
                fontSize="14px"
                width="70vw"
                margin="1vh 0 0 0"
                lineHeight="22px"
                color="#707070"
                textAlign="left"
            />
            <ImageWrapper
                imageSource={aboutAsset2}
                margin="5vh 0 0 0"
                alternateName="HomeAsset1"
                imageWidth="200px"
            />
            <Text
                content="How we Function?"
                fontSize="18px"
                width="70vw"
                margin="5vh 0 0 0"
                lineHeight="28px"
                color="#707070"
                textAlign="center"
                fontWeight="500"
            />
            <Text
                content="We are a cloud services provider. Our
                services are wherever we are. Our team 
                collaborates with each other using cloud
                based technologies. This saves resources
                and promotes efficiency. Maintenance, 
                Improvement of services, analytics, 
                addition of services all happens over the
                air.  "
                fontSize="14px"
                width="70vw"
                margin="1vh 0 0 0"
                lineHeight="22px"
                color="#707070"
                textAlign="left"
            />
            <ImageWrapper
                imageSource={aboutAsset3}
                margin="5vh 0 0 0"
                alternateName="HomeAsset1"
                imageWidth="200px"
            />
            <Text
                content="Company and Vision"
                fontSize="18px"
                width="70vw"
                margin="5vh 0 0 0"
                lineHeight="28px"
                color="#707070"
                textAlign="center"
                fontWeight="500"
            />
            <Text
                content="We are a registered business under the 
                Shops and Establishment Act 1971. We are
                a Sole Proprietorship entity with the founder
                being the Proprietor. All our collaborators
                are on contracts. We strive for 
                excellence in the tech industry. Initially, we
                are starting off with limited collaborators
                and operations. But, this does not limit us
                providing the tech support you need. We
                have a vision to impart tech knowledge,
                support and services to all of the people 
                in the most intuitive and cost effective 
                way possible. We know we will be able to
                do so as we are constantly aiming for
                growth and innovation. This is the era of
                technology and we plan to use it to help
                you out the most with your tech needs.  
                
                "
                fontSize="14px"
                width="70vw"
                margin="1vh 0 0 0"
                lineHeight="22px"
                color="#707070"
                textAlign="left"
            />
            <ImageWrapper
                imageSource={aboutAsset4}
                margin="5vh 0 0 0"
                alternateName="HomeAsset1"
                imageWidth="150px"
            />
            <Text
                content="Jobs"
                fontSize="18px"
                width="70vw"
                margin="5vh 0 0 0"
                lineHeight="28px"
                color="#707070"
                textAlign="center"
                fontWeight="500"
            />
            <Text
                content="No company is complete without employees. Currently we are not in the need of any employees or any contract based collaborators. Visit this post or follow our instagram page to know more about upcoming jobs. We are a constantly growing venture. And we will be needing collaborators in the future. For now, stay tuned. If you however, need to enquire for collaborations, please Click the button below"
                fontSize="14px"
                width="70vw"
                margin="1vh 0 0 0"
                lineHeight="22px"
                color="#707070"
                textAlign="left"
            />
            <ButtonSquared
                content = "Enquire for jobs"
                backgroundColor = "#432C82"
                fontSize = "12px"
                fontWeight = "600"
                lineHeight = "16px"
                color = "white"
                padding = "3vw 4vw"
                margin = "3vh 0 10vh 0"
            />
        </div>
    )
}

//Default export
export default About