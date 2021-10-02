//The menu button

import menuIcon from '../cdn/images/menu.png'

//The functional component here
const Menu = ({openMenu}) => {
    return (
        <div onClick = {openMenu} className="menuBtn">
            <img className = "menuBtn__menuIcon" src={menuIcon} alt="Menu" width = "36"/>
        </div>
    )
}

//Default Exports
export default Menu