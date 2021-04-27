import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom'
import './styles/HomePage.css'

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
        <div className='homePageMain'>
          <p id="name">
              Hi, I'm Acelyn 👋🏻
          </p>
        </div>
      </div>
    )
    }
}