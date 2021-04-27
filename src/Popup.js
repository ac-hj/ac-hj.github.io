import React, { Component } from 'react';
import github from './styles/github2.png';
import email from './styles/email.png';
import './styles/gallery.css';
import mug from './styles/christmas_cup.jpg'
import vase from './styles/vase.jpg'
import fruit_seed from './styles/fruit_seeds.gif'

export class Popup extends Component {

    render() {
        return (
            <div className="popup-box">
                <div className="box">
                    <span className="close-icon" onClick={this.props.handleClose}>x</span>
                    {this.props.content}
                </div>
            </div>
        );
    }
}


