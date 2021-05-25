import React, { Component, useState } from 'react';
import './styles/gallery.css';
import mug from './media/christmas_cup.jpg'
import vase from './media/vase.jpg'
import fruit_seed from './media/fruit_seeds.gif'
import { Popup } from './Popup'
import { Footer_2 } from './Footer_2'
import { Footer } from './Footer';
import $ from 'jquery';
import jQuery from 'jquery';
import bunny from './media/entire-bunny.png'
import bunny_dressed from './media/bunny-dressed.png'
import cupcake from './media/cupcake.png'
import flower_vase from './media/flower-vase.png'

export class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state = { open_1: false, open_2: false, open_3: false, open_4: false, slideIndex: 1 };
        // this.togglePopup = this.togglePopup.bind(this)
        
    }

    componentDidMount() {
        console.log("ok")
        console.log(document.getElementsByClassName("frame"))
        console.log("ok")
        var dot_1 = document.getElementsByClassName("dot-1")[0];
        var dot_2 = document.getElementsByClassName("dot-2")[0];
        var dot_3 = document.getElementsByClassName("dot-3")[0];
        // dot_1.style.onClick = this.currentSlide(1);
        // dot_2.style.onClick = this.currentSlide(2);
        // dot_3.style.onClick = this.currentSlide(3);
        var self = this;
        this.showSlides(this.state.slideIndex);
        jQuery(function($) {
            $(dot_1).on('click', function(){
                self.currentSlide(1)
            });
            $(dot_2).on('click', function(){
                self.currentSlide(2)
            });
            $(dot_3).on('click', function(){
                self.currentSlide(3)
            });
        })
    }


    // Next/previous controls
    plusSlides(n) {
        this.showSlides(this.state.slideIndex += n);
    }

    // Thumbnail image controls
    currentSlide(n) {
        console.log("clicked")
        this.showSlides(this.state.slideIndex = n);
    }

    showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("frame");
        // var dots = document.getElementsByClassName("dot");
        var dot_1 = document.getElementsByClassName("dot-1")[0];
        var dot_2 = document.getElementsByClassName("dot-2")[0];
        var dot_3 = document.getElementsByClassName("dot-3")[0];
        if (n > slides.length) {this.state.slideIndex = 1}
        if (n < 1) {this.state.slideIndex = slides.length}
        // console.log(this.state.slideIndex)
        // console.log(slides[0])
        // console.log(slides)
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        // for (i = 0; i < dots.length; i++) {
            
        //     dots[i].className = dots[i].className.replace(" active", "");
        // }
        console.log(dot_1)
        dot_1.className = dot_1.className.replace(" active", "");
        dot_2.className = dot_2.className.replace(" active", "");
        dot_3.className = dot_3.className.replace(" active", "");
        slides[this.state.slideIndex-1].style.display = "flex";
        if (this.state.slideIndex-1 == 0) {
            dot_1.className += " active"
        } else if (this.state.slideIndex-1 == 1) {
            dot_2.className += " active"
        } else {
            dot_3.className += " active"
        }
    }
        
    render() {

        return(
            <div>
                <div class="gallery-background">
                    {/* <span id="galeria">Galeria</span> */}
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
                        <div  onClick={() => {this.setState({open_1: !this.state.open_1})}} class="work-4">
                            <img id="artwork" src={bunny}></img>
                        </div>
                        {this.state.open_1 && <Popup
                            content={<>
                                <p id="art-details">Followed this tutorial: https://www.youtube.com/watch?v=wt0EWKTKRi8&ab_channel=illustrateria</p>
                            </>}
                            handleClose={() => {this.setState({open_4: !this.state.open_4})}} 
                        />}
                    </div>
                    <div class="frame">
                        <div  onClick={() => {this.setState({open_1: !this.state.open_1})}} class="work-1">
                            <img id="artwork" src={flower_vase}></img>
                        </div>
                        {this.state.open_1 && <Popup
                            content={<>
                                <p id="art-details">Followed this tutorial: https://www.youtube.com/watch?v=wt0EWKTKRi8&ab_channel=illustrateria</p>
                            </>}
                            handleClose={() => {this.setState({open_1: !this.state.open_1})}} 
                        />}
                        <div onClick={() => {this.setState({open_2: !this.state.open_2})}} class="work-2">
                            <img id="artwork" src={cupcake}></img>
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
                    <div class="dots">
                        <span class="dot-1"></span>
                        <span class="dot-2"></span>
                        <span class="dot-3"></span>
                    </div>
                </div>
             <Footer_2/>
            </div>
        );
    }
}