//The primary component. The services component
import Text from "./Text"
import ImageWrapper from "./ImageWrapper"
import ButtonSquared from "./ButtonSquared"
import servicesAsset1 from "../cdn/images/servicesAsset1.png"
import servicesAsset2 from "../cdn/images/servicesAsset2.png"
import servicesAsset3 from "../cdn/images/servicesAsset3.png"
import servicesAsset4 from "../cdn/images/servicesAsset4.png"
import servicesAsset5 from "../cdn/images/servicesAsset5.png"
import servicesAsset6 from "../cdn/images/servicesAsset6.png"
import servicesAsset7 from "../cdn/images/servicesAsset7.png"
import servicesAsset8 from "../cdn/images/servicesAsset8.png"
import servicesAsset9 from "../cdn/images/servicesAsset9.png"
import {Link} from "react-router-dom"

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
                content="We provide the most essential and Genuine
                services your computer can ever need. 
                Don't worry if you don't see a service below, 
                we are constantly expanding and will soon 
                be adding more services"
                fontSize="14px"
                width="70vw"
                margin="1vh 0 5vh 0"
                lineHeight="22px"
                color="#707070"
                textAlign="center"
            />
            <div className="App__services__standloneHero">
                <div className="App__services__standloneHero__image">
                    <img src={servicesAsset2} alt="Services" width = "70"/>
                </div>
                <div className="App__services__standloneHero__service-number">
                    <p className="App__services__standloneHero__service-number__content">
                        0
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
                <div  className="App__services__standloneHero__service-price">
                    <div className="App__services__standloneHero__service-price__circle">
                        <div className = "App__services__standloneHero__service-price__circle__currency">
                            INR
                        </div>
                        <div className = "App__services__standloneHero__service-price__circle__price">
                            29
                        </div>
                    </div>
                </div>
                <div className="App__services__standloneHero__service-details">
                    <p className="App__services__standloneHero__service-details__content">
                        <Link to = "/remote-assistance">Book Now</Link>
                    </p>
                </div>
            </div>
            <div className="App__services__standloneHero">
                <div className="App__services__standloneHero__image">
                    <img src={servicesAsset3} alt="Services" width = "70"/>
                </div>
                <div className="App__services__standloneHero__service-number">
                    <p className="App__services__standloneHero__service-number__content">
                        1
                    </p>
                </div>
                <div className="App__services__standloneHero__service-title">
                    <p className="App__services__standloneHero__service-title__content">
                        Windows Installations
                    </p>
                </div>
                <div className="App__services__standloneHero__service-price-declaration">
                    <p className="App__services__standloneHero__service-price-declaration__content">
                        Starting at
                    </p>
                </div>
                <div  className="App__services__standloneHero__service-price">
                    <div className="App__services__standloneHero__service-price__circle">
                        <div className = "App__services__standloneHero__service-price__circle__currency">
                            INR
                        </div>
                        <div className = "App__services__standloneHero__service-price__circle__price">
                            99
                        </div>
                    </div>
                </div>
            </div>
            <div className="App__services__standloneHero">
                <div className="App__services__standloneHero__image">
                    <img src={servicesAsset4} alt="Services" width = "70"/>
                </div>
                <div className="App__services__standloneHero__service-number">
                    <p className="App__services__standloneHero__service-number__content">
                        2
                    </p>
                </div>
                <div className="App__services__standloneHero__service-title">
                    <p className="App__services__standloneHero__service-title__content">
                        Antivirus Installations
                    </p>
                </div>
                <div className="App__services__standloneHero__service-price-declaration">
                    <p className="App__services__standloneHero__service-price-declaration__content">
                        Starting at
                    </p>
                </div>
                <div  className="App__services__standloneHero__service-price">
                    <div className="App__services__standloneHero__service-price__circle">
                        <div className = "App__services__standloneHero__service-price__circle__currency">
                            INR
                        </div>
                        <div className = "App__services__standloneHero__service-price__circle__price">
                            49
                        </div>
                    </div>
                </div>
            </div>
            <div className="App__services__standloneHero">
                <div className="App__services__standloneHero__image">
                    <img src={servicesAsset5} alt="Services" width = "70"/>
                </div>
                <div className="App__services__standloneHero__service-number">
                    <p className="App__services__standloneHero__service-number__content">
                        3
                    </p>
                </div>
                <div className="App__services__standloneHero__service-title">
                    <p className="App__services__standloneHero__service-title__content">
                        Office Installations
                    </p>
                </div>
                <div className="App__services__standloneHero__service-price-declaration">
                    <p className="App__services__standloneHero__service-price-declaration__content">
                        Starting at
                    </p>
                </div>
                <div  className="App__services__standloneHero__service-price">
                    <div className="App__services__standloneHero__service-price__circle">
                        <div className = "App__services__standloneHero__service-price__circle__currency">
                            INR
                        </div>
                        <div className = "App__services__standloneHero__service-price__circle__price">
                            99
                        </div>
                    </div>
                </div>
            </div>
            <div className="App__services__standloneHero">
                <div className="App__services__standloneHero__image">
                    <img src={servicesAsset6} alt="Services" width = "70"/>
                </div>
                <div className="App__services__standloneHero__service-number">
                    <p className="App__services__standloneHero__service-number__content">
                        4
                    </p>
                </div>
                <div className="App__services__standloneHero__service-title">
                    <p className="App__services__standloneHero__service-title__content">
                        Walk-in Troubleshooting
                    </p>
                </div>
                <div className="App__services__standloneHero__service-price-declaration">
                    <p className="App__services__standloneHero__service-price-declaration__content">
                        Starting at
                    </p>
                </div>
                <div  className="App__services__standloneHero__service-price">
                    <div className="App__services__standloneHero__service-price__circle">
                        <div className = "App__services__standloneHero__service-price__circle__currency">
                            INR
                        </div>
                        <div className = "App__services__standloneHero__service-price__circle__price">
                            99
                        </div>
                    </div>
                </div>
            </div>
            <div className="App__services__standloneHero">
                <div className="App__services__standloneHero__image">
                    <img src={servicesAsset7} alt="Services" width = "70"/>
                </div>
                <div className="App__services__standloneHero__service-number">
                    <p className="App__services__standloneHero__service-number__content">
                        5
                    </p>
                </div>
                <div className="App__services__standloneHero__service-title">
                    <p className="App__services__standloneHero__service-title__content">
                        System Checks and Clean-up
                    </p>
                </div>
                <div className="App__services__standloneHero__service-price-declaration">
                    <p className="App__services__standloneHero__service-price-declaration__content">
                        Starting at
                    </p>
                </div>
                <div  className="App__services__standloneHero__service-price">
                    <div className="App__services__standloneHero__service-price__circle">
                        <div className = "App__services__standloneHero__service-price__circle__currency">
                            INR
                        </div>
                        <div className = "App__services__standloneHero__service-price__circle__price">
                            299
                        </div>
                    </div>
                </div>
            </div>
            <div className="App__services__standloneHero">
                <div className="App__services__standloneHero__image">
                    <img src={servicesAsset8} alt="Services" width = "70"/>
                </div>
                <div className="App__services__standloneHero__service-number">
                    <p className="App__services__standloneHero__service-number__content">
                        6
                    </p>
                </div>
                <div className="App__services__standloneHero__service-title">
                    <p className="App__services__standloneHero__service-title__content">
                        Thermal Optimizations
                    </p>
                </div>
                <div className="App__services__standloneHero__service-price-declaration">
                    <p className="App__services__standloneHero__service-price-declaration__content">
                        Starting at
                    </p>
                </div>
                <div  className="App__services__standloneHero__service-price">
                    <div className="App__services__standloneHero__service-price__circle">
                        <div className = "App__services__standloneHero__service-price__circle__currency">
                            INR
                        </div>
                        <div className = "App__services__standloneHero__service-price__circle__price">
                            399
                        </div>
                    </div>
                </div>
            </div>
            <div className="App__services__standloneHero">
                <div className="App__services__standloneHero__image">
                    <img src={servicesAsset9} alt="Services" width = "70"/>
                </div>
                <div className="App__services__standloneHero__service-number">
                    <p className="App__services__standloneHero__service-number__content">
                        7
                    </p>
                </div>
                <div className="App__services__standloneHero__service-title">
                    <p className="App__services__standloneHero__service-title__content">
                        Speed Optimizations
                    </p>
                </div>
                <div className="App__services__standloneHero__service-price-declaration">
                    <p className="App__services__standloneHero__service-price-declaration__content">
                        Starting at
                    </p>
                </div>
                <div  className="App__services__standloneHero__service-price">
                    <div className="App__services__standloneHero__service-price__circle">
                        <div className = "App__services__standloneHero__service-price__circle__currency">
                            INR
                        </div>
                        <div className = "App__services__standloneHero__service-price__circle__price">
                            2499
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services