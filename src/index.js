import React from 'react'
import ReactDOM from 'react-dom'
import App from './App';
import './styles/index.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

var destination = document.querySelector('#homepage-container')

ReactDOM.render(
    <Router>
      <App/>
    </Router>,
    destination
)