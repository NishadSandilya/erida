//The primary component. The services component
import Text from "./Text"
import ImageWrapper from "./ImageWrapper"
import ButtonSquared from "./ButtonSquared"
import servicesAsset1 from "../cdn/images/servicesAsset1.png"
import servicesAsset2 from "../cdn/images/servicesAsset2.png"
import homeAssist from "../cdn/images/homeAssist.png"
import { Link } from "react-router-dom"
import ServiceCard from "./ServiceCard"
import { servicesData } from "./servicesData"

//The functional component here
const Services = () => {
    return (
        <div className="App__services">
            <ImageWrapper
                imageSource={servicesAsset1}
                margin="5vh 0 0 0"
                alternateName="HomeAsset1"
                imageWidth="250px"
            />
            <Text
                content="Services"
                fontSize="18px"
                width="70vw"
                margin="5vh 0 0 0"
                lineHeight="28px"
                color="#707070"
                textAlign="center"
                fontWeight="500"
            />
            <Text
                content="We provide two ways of servicing. Remote/Home assistance and generic walk-in service. Please see the services below"
                fontSize="14px"
                width="70vw"
                margin="1vh 0 5vh 0"
                lineHeight="22px"
                color="#707070"
                textAlign="center"
            />
            <Text
                content="Remote Troubleshooting and Home Assistance"
                fontSize="16px"
                width="70vw"
                margin="5vh 0 0 0"
                lineHeight="22px"
                color="#707070"
                textAlign="center"
                fontWeight="500"
            />
            <Text
                content="You can place this kind of an order from the App. Its super easy and we will get your problem solved in no time"
                fontSize="12px"
                width="70vw"
                margin="1vh 0 2.5vh 0"
                lineHeight="18px"
                color="#707070"
                textAlign="center"
            />
            <div className="App__services__standloneHero">
                <div className="App__services__standloneHero__image">
                    <img src={servicesAsset2} alt="Services" width="70" />
                </div>
                <div className="App__services__standloneHero__service-number">
                    <p className="App__services__standloneHero__service-number__content">
                        1
                    </p>
                </div>
                <div className="App__services__standloneHero__service-title">
                    <p className="App__services__standloneHero__service-title__content">
                        Remote Computer Fixes
                    </p>
                </div>
                <div className="App__services__standloneHero__service-price-declaration">
                    <p className="App__services__standloneHero__service-price-declaration__content">
                        Starting at
                    </p>
                </div>
                <div className="App__services__standloneHero__service-price">
                    <div className="App__services__standloneHero__service-price__circle">
                        <div className="App__services__standloneHero__service-price__circle__currency">
                            INR
                        </div>
                        <div className="App__services__standloneHero__service-price__circle__price">
                            29
                        </div>
                    </div>
                </div>
                <div className="App__services__standloneHero__service-details">
                    <p className="App__services__standloneHero__service-details__content">
                        <Link to="/remote-assistance">Book Now</Link>
                    </p>
                </div>
            </div>
            <div className="App__services__standloneHero">
                <div className="App__services__standloneHero__image">
                    <img src={homeAssist} alt="Services" width="70" />
                </div>
                <div className="App__services__standloneHero__service-number">
                    <p className="App__services__standloneHero__service-number__content">
                        2
                    </p>
                </div>
                <div className="App__services__standloneHero__service-title">
                    <p className="App__services__standloneHero__service-title__content">
                        Home Assistance, Troubleshooting
                    </p>
                </div>
                <div className="App__services__standloneHero__service-price-declaration">
                    <p className="App__services__standloneHero__service-price-declaration__content">
                        Starting at
                    </p>
                </div>
                <div className="App__services__standloneHero__service-price">
                    <div className="App__services__standloneHero__service-price__circle">
                        <div className="App__services__standloneHero__service-price__circle__currency">
                            INR
                        </div>
                        <div className="App__services__standloneHero__service-price__circle__price">
                            99
                        </div>
                    </div>
                </div>
                <div className="App__services__standloneHero__service-details">
                    <p className="App__services__standloneHero__service-details__content">
                        <Link to="/home-assistance">Book Now</Link>
                    </p>
                </div>
            </div>
            <Text
                content="Walk-in Services"
                fontSize="16px"
                width="70vw"
                margin="10vh 0 0 0"
                lineHeight="22px"
                color="#707070"
                textAlign="center"
                fontWeight="500"
            />
            <Text
                content="You cannot directly book these services here. This was done to maximize the ease of use for the customer"
                fontSize="12px"
                width="70vw"
                margin="1vh 0 2.5vh 0"
                lineHeight="18px"
                color="#707070"
                textAlign="center"
            />
            {servicesData.map((ele, idx) => {
                return <ServiceCard key = {idx} displayImg = {ele.displayImg} title = {ele.title} price = {ele.price} details = {ele.details} number = {idx+1}/>
            })}
        </div>
    )
}

export default Services