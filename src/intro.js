
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Footer } from './Footer'
import selfPic from './styles/drawself2.jpg';
import selfPic2 from './styles/drawself1.jpg'
// import { Footer } from './footer';
import './styles/introduction.css';

export class Introduction extends Component {

    render () {
        return (
            <main>
                <Helmet>
                    <title> Introduction </title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Helmet>
                <div class="main-page">
                    <div id="picture">
                        <img alt="self" id="self" src={selfPic}/>
                            <div id="caption" >
                                <div id="bar">

                                </div>
                                <span id="hello">Hai there!♡</span>
                                <div id="descript">
                                    <p id="student">
                                        I'm Acelyn, a Computer Science student at the University of Pennsylvania. My interests lie in machine learning, big data and networked systems. When I'm not coding, you can find me scavengering old music, building with legos or binge-watching K-Dramas. 
                                    </p>
                                </div>
                            </div>
                    </div>
                </div>
                <Footer />
            </main>
        );
    }
}