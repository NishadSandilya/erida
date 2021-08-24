//Imports

import ProductCard from "./components/ProductCard"
import { createTheme, ThemeProvider } from '@material-ui/core'
import {useEffect, useState} from 'react'
import axios from 'axios'

const appTheme = createTheme({
    palette: {
        primary: {
            main: '#FFFFFF'
        },
        secondary: {
            main: '#000000'
        }
    },
    typography: {
        fontFamily: 'Poppins, sans-serif',
        fontSize: 16,
        fontWeightLight: 300,
        fontWeightMedium: 400,
        fontWeightRegular: 500,
        fontWeightBold: 600
    }
})

//Create a functional Component App
const App = () => {
    useEffect(() => {
        //Call the products after page load
        async function fetchProducts(){
            const data = await axios({
                method: "GET",
                url: "https://b80d-2405-201-a803-6043-fd28-2276-c2a3-6b.ngrok.io/v1/products"
            })
            setProducts(data.data)
        }
        fetchProducts()
    }, [])

    const [products, setProducts] = useState(undefined)
    //return JSx
    return (
        <ThemeProvider theme = {appTheme}>
            <div className="App">
                {products?.payload.docs.map(element => {
                    return(<ProductCard prod = {element}/>)
                })}               
            </div>
        </ThemeProvider>
    )
}

//Export default
export default App