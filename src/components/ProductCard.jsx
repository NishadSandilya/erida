//Imports

import { useState } from "react"

import { } from '@material-ui/core'
import CartUserPref from "./CartUserPref"
import DetailsCard from "./DetailsCard"

const ProductCard = ({ prod }) => {
    const [ctaActive, setCta] = useState(false)
    const [sdActive, setSd] = useState(false)

    return (
        <div className="App__productCardWrapper">
            <p className="App__productCardWrapper__heading">{prod?.title}</p>
            <p className="App__productCardWrapper__sub-heading">{prod?.productInfo}</p>
            <div className="App__productCardWrapper__details">
                {prod?.productDesc.slice(0, 3).map(element => {
                    return (<li key={element.slice(0, 2)}>{element}</li>)
                })}
            </div>
            <p onClick={() => setSd(() => true)} className="App__productCardWrapper__additionalInfo">{prod?.importantInfoCta}</p>
            <div className="App__productCardWrapper__ctaBox">
                <p className="App__productCardWrapper__ctaBox__price">{`INR ${prod?.price}`}</p>
                <p className="App__productCardWrapper__ctaBox__discountedPrice">{`INR ${prod?.discountedPrice} (${prod?.discount}% off)`}</p>
                <button onClick={() => setCta(() => true)} className="App__productCardWrapper__ctaBox__cta">ADD TO CART</button>
            </div>
            {ctaActive && <CartUserPref fields={prod?.ctaFields} btnControl={() => setCta(() => false)} />}
            {sdActive && <DetailsCard seeDetails={prod?.importantInfo} btnControl1={() => setSd(() => false)} />}
        </div>
    )
}

//Default export component
export default ProductCard