//The menu of erida
import backArrow from "../cdn/images/backArrow.png"
import menuAsset1 from "../cdn/images/menuAsset1.png"
import ImageWrapper from "./ImageWrapper"
import Text from "./Text"
import ButtonRound from "./ButtonRound"
import { Link } from 'react-router-dom'

//The functional Menu component
const Menu = () => {
    return (
        <div className="menu">
            <ImageWrapper
                imageSource={menuAsset1}
                margin="5vh 0 0 45vw"
                alternateName="HomeAsset1"
                imageWidth="450px"
            />
            <div className="menu__quickLinks">
                <Text
                    content="Quick Links"
                    fontSize="12px"
                    fontWeight="600"
                    margin="1vh 0 0 0"
                    lineHeight="22px"
                    color="#707070"
                    textAlign="right"
                />
                <a href="tel:8638779180">
                    <ButtonRound
                        content="Call Us"
                        fontSize="12px"
                        fontWeight="600"
                        lineHeight="16px"
                        padding="1.5vw 3vw"
                        margin="1vh 0 1vh 0"
                        width="fit-content"
                    />
                </a>
                <Link to='/orders'>
                    <ButtonRound
                        content="Your Orders"
                        fontSize="12px"
                        fontWeight="600"
                        lineHeight="16px"
                        width="100px"
                        height="30px"
                    />
                </Link>
                <a href="https://www.google.com/maps/place/erida+Service+%26+Gaming/@26.3564842,92.6917527,15z/data=!4m5!3m4!1s0x0:0x2c19db13536debb9!8m2!3d26.3564842!4d92.6917527">
                    <ButtonRound
                        content="Locate us on the map"
                        fontSize="12px"
                        fontWeight="600"
                        lineHeight="16px"
                        padding="1.5vw 3vw"
                        margin="1vh 0 0 0"
                        width="fit-content"
                    /></a>
            </div>
            <div className="menu__navLinks">

                <li><Link to='/support'>Get Support</Link></li>
                <li><Link to='/value'>Why erida?</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/legal'>Legal</Link></li>

            </div>
        </div>
    )
}

//Default export
export default Menu