import React from 'react'
import ReactDOM from 'react-dom'
import App from './App';
import './styles/index.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Gallery } from './Gallery.js'

var destination = document.querySelector('#homepage-container')

ReactDOM.render(
    <Router>
      <Route path="./Gallery.js" component={Gallery} /> 
      <App/>
    </Router>,
    destination
)