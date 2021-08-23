//Imports
import ReactDOM from 'react-dom'
import App from './App'
import './styles/app.css'
import {HashRouter as Router} from 'react-router-dom'
//Render the component
ReactDOM.render(
    <Router basename='/'>
        <App/>
    </Router>
,document.getElementById('root'))