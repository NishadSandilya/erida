import eridaLogo from '../cdn/images/eridaWide.png'

//Logo component
const Logo = () => {
    return (
        <div className="logo">
            <img src={eridaLogo} alt="Logo" width="144" />
        </div>
    )
}

//Default Export
export default Logo