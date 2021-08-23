//Imports

import { useEffect, useState } from "react"
import axios from 'axios'

import {} from '@material-ui/core'
import CartUserPref from "./CartUserPref"

const ProductCard = () => {

    useEffect(() => {
        //Call the products after page load
        async function fetchProducts(){
            const data = await axios({
                method: "GET",
                url: "http://b80d-2405-201-a803-6043-fd28-2276-c2a3-6b.ngrok.io/v1/products"
            })
            setProducts(data.data)
        }
        fetchProducts()
    }, [])

    const [products, setProducts] = useState(undefined)
    const [ctaActive, setCta] = useState(false)

    return (
        <div className="App__productCardWrapper">
            <p className = "App__productCardWrapper__heading">{products?.payload.docs[0].title}</p>
            <p className = "App__productCardWrapper__sub-heading">{products?.payload.docs[0].productInfo}</p>
            <div className = "App__productCardWrapper__details">
                {products?.payload.docs[0].productDesc.slice(0,3).map(element => {
                    return (<li key = {element.slice(0,2)}>{element}</li>)
                })}
            </div>
            <p className = "App__productCardWrapper__additionalInfo">{products?.payload.docs[0].importantInfoCta}</p>
            <div className="App__productCardWrapper__ctaBox">
                <p className = "App__productCardWrapper__ctaBox__price">{`INR ${products?.payload.docs[0].price}`}</p>
                <p className = "App__productCardWrapper__ctaBox__discountedPrice">{`INR ${products?.payload.docs[0].discountedPrice} (${products?.payload.docs[0].discount}% off)`}</p>
                <button onClick = {() => setCta(() => true)} className = "App__productCardWrapper__ctaBox__cta">ADD TO CART</button>
            </div>
            {ctaActive && <CartUserPref fields = {products?.payload.docs[0].ctaFields} btnControl = {() => setCta(() => false)}/>}
        </div>
    )
}

//Default export component
export default ProductCard