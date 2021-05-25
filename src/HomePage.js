import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom'
import './styles/HomePage.css'
import bunny from './media/bunny-home.png'

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        page: 'home'
    }
    // this.renderPage = this.renderPage.bind(this);
  }
  
  render() {
    return (
      <div className='main-home'>
        <Helmet>
            <title> Home </title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Helmet>
        <div className='homePageMain'>
          <p id="name">
              Hi, I'm Acelyn 
              {/* 👋🏻 */}
          </p>
          <img id="bunny-home" src={bunny}></img>
        </div>
      </div>
    )
    }
}