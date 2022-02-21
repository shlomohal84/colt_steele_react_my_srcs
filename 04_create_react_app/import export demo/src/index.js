import React,{StrictMode} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import App from './App'
import helpful, { sort, sing } from './helpers'

helpful()
sort()
sing()

document.title = 'React Class Component'
ReactDOM.render(<StrictMode><App /></StrictMode>,document.getElementById('root'))