//The menu of erida
import cloudImg from "../cdn/images/cloud.png"
import backArrow from "../cdn/images/backArrow.png"
import menuAsset1 from "../cdn/images/menuAsset1.png"
import ImageWrapper from "./ImageWrapper"
import Text from "./Text"
import ButtonSquared from "./ButtonSquared"
import ButtonRound from "./ButtonRound"
import { Link } from 'react-router-dom'

//The functional Menu component
const Menu = ({ closeMenu }) => {
    return (
        <div className="menu">
            <div onClick={closeMenu} className="menu__menuClose">
                <img src={backArrow} alt="Arrow image" width="36" />
            </div>
            <ImageWrapper
                imageSource={menuAsset1}
                margin="15vh 0 0 45vw"
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
                    textAlign="left"
                />
                <a href="tel:8638779180">
                <ButtonRound
                    content="Call Us"
                    fontSize="12px"
                    fontWeight="600"
                    lineHeight="16px"
                    padding="1.5vw 3vw"
                    margin="1vh 0 0 0"
                    width="fit-content"
                />
                </a>                
                <ButtonRound 
                    content="Locate us on the map"
                    fontSize="12px"
                    fontWeight="600"
                    lineHeight="16px"
                    padding="1.5vw 3vw"
                    margin="1vh 0 0 0"
                    width="fit-content"
                />
            </div>
            <div className="menu__navLinks">
                
                    <li><Link onClick = {closeMenu} to='/'>Home</Link></li>
                    <li><Link onClick = {closeMenu} to='/services'>Browse Services</Link></li>
                    <li><Link onClick = {closeMenu} to='/support'>Get Support</Link></li>
                    <li><Link onClick = {closeMenu} to='/value'>Why erida?</Link></li>
                    <li><Link onClick = {closeMenu} to='/about'>About</Link></li>
                    <li><Link onClick = {closeMenu} to='/legal'>Legal</Link></li>
                
            </div>
        </div>
    )
}

//Default export
export default Menu