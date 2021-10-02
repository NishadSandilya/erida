//Imports
import ReactDOM from 'react-dom'
import App from './App'
import './styles/app.css'
import { HashRouter as Router } from 'react-router-dom'
import {DataProvider} from "./components/Data"

//Render the component
ReactDOM.render(
    <Router basename='/'>
        <DataProvider>
            <App />
        </DataProvider>
    </Router>
    , document.getElementById('root'))