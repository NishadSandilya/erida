//Imports

import { createTheme, ThemeProvider } from '@material-ui/core'
import Home from './components/Home'
import { Route, Switch } from 'react-router-dom'
import Support from './components/Support'
import Values from './components/Values'
import About from './components/About'
import Legal from './components/Legal'
import Logo from "./components/Logo"
import MenuBtn from "./components/MenuBtn"
import Menu from "./components/Menu"
import { useState } from 'react'
import Services from './components/Services'
import RemoteFix from './components/RemoteFix'

const appTheme = createTheme({
    palette: {
        primary: {
            main: '#000000'
        },
        secondary: {
            main: '#707070'
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
    const [ menuActive, setMenuActive ] = useState(false)
    //return JSx
    return (
        <ThemeProvider theme={appTheme}>
            <div className="App">
                <Logo />
                <MenuBtn openMenu = {() => setMenuActive(true)}/>
                {
                    menuActive ? <Menu closeMenu = {() => setMenuActive(false)}/> : ""
                }
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/services" exact component={Services} />
                    <Route path="/support" exact component={Support} />
                    <Route path="/value" exact component={Values} />
                    <Route path="/about" exact component={About} />
                    <Route path="/legal" exact component={Legal} />
                    <Route path="/remote-assistance" exact component={RemoteFix} />
                </Switch>
            </div>
        </ThemeProvider>
    )
}

//Export default
export default App