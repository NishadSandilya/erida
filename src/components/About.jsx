//The about us component
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
                content="We are a team of Professionals trying to help common people with tech to the best we can. Our collaborators consist of Hardware and Software enthusiasts who have a substantial amount of knowledge in their fields. We focus at solving both hardware and software issues of a common man's computer and at solving the business/organizational needs of firms by providing them with affordable software solutions as well. We are currently limited on man-power and resources. However, that doesnot stop us from doing the good we want to. Aiming at the constant growth of the brand with technology stacks along with providing the necessary tech support to commons is erida"
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
                content="We are a firm adorer of technology and our
                services are wherever we are. For the software side, our team 
                collaborates with each other using cloud
                based technologies. This saves resources
                and promotes efficiency. Maintenance, 
                Improvement of services, analytics, 
                addition of services all happens over the
                air. For the commons we have set up a service station in the founder's home demographically relevant to whom the services will be provided at the moment."
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
                content="Erida is a startup that plans to solve the common's problems regarding tech. We want the people to have the name erida forged into their brains and whenever they think of tech in general, erida should be the first name they come up with. All our collaborators
                are on contracts. We strive for 
                excellence in the tech industry. Initially, we
                are starting off with limited collaborators
                and operations. We
                have a vision to impart tech knowledge,
                support and services to all of the people 
                in the most intuitive and cost effective 
                way possible. We know we will be able to
                do so as we are constantly aiming for
                growth and innovation. This is the era of
                technology and we plan to use it to help
                the people out the most with their tech needs.  
                
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
                content="Currently we are not in the need of any employees or any contract based collaborators. Visit this post or follow our instagram page to know more about upcoming jobs. We are a constantly growing venture. And we will be needing collaborators in the future. For now, stay tuned. If you however, need to enquire for collaborations, please Click the button below"
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