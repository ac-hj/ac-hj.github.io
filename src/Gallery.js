import React, { Component, useState } from 'react';
import github from './styles/github2.png';
import email from './styles/email.png';
import './styles/gallery.css';
import mug from './styles/christmas_cup.jpg'
import vase from './styles/vase.jpg'
import fruit_seed from './styles/fruit_seeds.gif'
import { Popup } from './Popup'

export class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state = { open_1: false, open_2: false, open_3: false };
        // this.togglePopup = this.togglePopup.bind(this)
    }
    
    render() {

        return(
            <div class="gallery-background">
                <span id="galeria">Galeria</span>
                <div class="frame">
                    <div  onClick={() => {this.setState({open_1: !this.state.open_1})}} class="work-1">
                        <img id="artwork" src={fruit_seed}></img>
                    </div>
                    {this.state.open_1 && <Popup
                        content={<>
                            <p id="art-details">Followed this tutorial: https://www.youtube.com/watch?v=wt0EWKTKRi8&ab_channel=illustrateria</p>
                        </>}
                        handleClose={() => {this.setState({open_1: !this.state.open_1})}} 
                    />}
                    <div onClick={() => {this.setState({open_2: !this.state.open_2})}} class="work-2">
                        <img id="artwork" src={mug}></img>
                    </div>
                    {this.state.open_2 && <Popup
                        content={<>
                            <p id="art-details">Followed this tutorial: https://www.youtube.com/watch?v=lFvRTqPu9qk&t=1s&ab_channel=NASTYAKULIABINAjungleofcolors</p>
                        </>}
                        handleClose={() => {this.setState({open_2: !this.state.open_2})}} 
                    />}
                    <div onClick={() => {this.setState({open_3: !this.state.open_3})}} class="work-3">
                        <img id="artwork" src={vase}></img>
                    </div>
                    {this.state.open_3 && <Popup
                        content={<>
                            <p id="art-details">Followed this tutorial: https://www.youtube.com/watch?v=_8zODfMHgYw&ab_channel=NASTYAKULIABINAjungleofcolors</p>
                        </>}
                        handleClose={() => {this.setState({open_3: !this.state.open_3})}} 
                    />}
                    <div class="work-4">
                        <p id="more">More coming soon~</p>
                    </div>
                </div>
            </div>
        );
    }
}