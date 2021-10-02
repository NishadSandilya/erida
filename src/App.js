//Imports

import { createTheme, ThemeProvider } from '@material-ui/core'
import Home from './components/Home'
import { Route, Switch, Redirect } from 'react-router-dom'
import Support from './components/Support'
import Values from './components/Values'
import About from './components/About'
import Legal from './components/Legal'
import Logo from "./components/Logo"
import Menu from "./components/Menu"
import Services from './components/Services'
import RemoteFix from './components/RemoteFix'
import InteractionBar from './components/InteractionBar'
import HomeAssist from './components/HomeAssist'
import AdminConsole from './components/AdminConsole'
import User from './components/User'
import { AppContext } from "./components/Data"
import InfoDisplay from './components/InfoDisplay'
import { useContext } from 'react'
import LoginPrompt from "./components/LoginPrompt"
import UserLoginModal from "./components/UserLoginModal"
import Orders from './components/Orders'
import HOCmini from './components/HOCmini'
import ShowOrdersPhone from './components/ShowOrdersPhone'
import ShowOrdersID from './components/ShowOrdersID'
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
    //Get the app context here as well
    const [{ infoDisplayControls }, { loginDisplayControls }, {hocDisplayControls}] = useContext(AppContext)

    //return JSX
    return (
        <ThemeProvider theme={appTheme}>
            <div className="App">
                {infoDisplayControls[0].visibility ? <InfoDisplay message={infoDisplayControls[0].message} color={infoDisplayControls[0].color} /> : ""}
                <Logo />
                <InteractionBar />
                {loginDisplayControls[0].loginPromptVisibility ? <LoginPrompt /> : ""}
                {loginDisplayControls[0].loginModalVisibility ? <UserLoginModal /> : ""}
                {hocDisplayControls[0].visibility ? <HOCmini /> : ""}
                <Switch>
                    <Route path="/user" exact component={User} />
                    <Route path="/menu" exact component={Menu} />
                    <Route path="/" exact component={Home} />
                    <Route path="/services" exact component={Services} />
                    <Route path="/support" exact component={Support} />
                    <Route path="/value" exact component={Values} />
                    <Route path="/about" exact component={About} />
                    <Route path="/legal" exact component={Legal} />
                    <Route path="/orders" exact component={Orders} />
                    <Route path="/remote-assistance" exact component={RemoteFix} />
                    <Route path="/home-assistance" exact component={HomeAssist} />
                    <Route path="/restricted/admin/console" exact component={AdminConsole} />
                    <Route path="/restricted/admin/console/search-orders-by-phone" exact component={ShowOrdersPhone} />
                    <Route path="/restricted/admin/console/search-orders-by-ID" exact component={ShowOrdersID} />
                    <Route path="*" children={<Redirect exact to="/" />} />
                </Switch>
            </div>
        </ThemeProvider>
    )
}

//Export default
export default App