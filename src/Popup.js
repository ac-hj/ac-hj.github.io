import React, { Component } from 'react';
import './styles/gallery.css';
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


