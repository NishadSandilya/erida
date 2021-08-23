//Imports

import ProductCard from "./components/ProductCard"
import { createTheme, ThemeProvider } from '@material-ui/core'

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
    //return JSx
    return (
        <ThemeProvider theme = {appTheme}>
            <div className="App">
                <ProductCard />
            </div>
        </ThemeProvider>
    )
}

//Export default
export default App