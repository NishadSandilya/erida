import menuIcon from '../cdn/images/menu.png'
import homeIcon from '../cdn/images/home.png'
import shopIcon from '../cdn/images/shop.png'
import userIcon from '../cdn/images/user.png'
import ImageWrapper from "./ImageWrapper"
import { Link } from 'react-router-dom'

const InteractionBar = () => {
    return (
        <div className="interactionBar">
            <Link to='/user' style = {{margin: "auto 0", display: "block"}}>
                <ImageWrapper
                    imageSource={userIcon}
                    margin="auto 0"
                    alternateName="HomeAsset1"
                    imageWidth="36px"
                />
            </Link>
            <Link to='/' style = {{margin: "auto 0", display: "block"}}>
                <ImageWrapper
                    imageSource={homeIcon}
                    margin="auto 0"
                    alternateName="HomeAsset1"
                    imageWidth="36px"
                />
            </Link>
            <Link to='/services' style = {{margin: "auto 0", display: "block"}}>
                <ImageWrapper
                    imageSource={shopIcon}
                    margin="auto 0"
                    alternateName="HomeAsset1"
                    imageWidth="36px"
                />
            </Link>
            <Link to='/menu' style = {{margin: "auto 0", display: "block"}}>
                <ImageWrapper
                    imageSource={menuIcon}
                    margin="auto 0"
                    alternateName="HomeAsset1"
                    imageWidth="36px"
                />
            </Link>
        </div>
    )
}

export default InteractionBar