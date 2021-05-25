
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Footer } from './Footer'
import selfPic from './media/drawself2.jpg';
import selfPic2 from './media/drawself1.jpg'
// import { Footer } from './footer';
import './styles/introduction.css';
import $ from 'jquery';
import jQuery from 'jquery';
import { Footer_2 } from './Footer_2'
import 'bootstrap/dist/css/bootstrap.min.css';

export class Introduction extends Component {

    componentDidMount() {
        jQuery(function($){
            //Take your div into one js variable
            var div = $("#caption");
            //Now when scroll event trigger do following
            var track = true
            $(div).on('click', function () {
                div.empty()
                if (track) {
                    var txt1 = `
                    <div id="bar"></div>
                    <span id="hello">As of lately...</span>
                    <div id="descript">
                        <p id="student">
                            I will be starting my virtual internship (office in Seattle) at <span id="amazon">Amazon</span> this June as a <span id="software">Software Development Engineer Intern</span> under Devices Organization. 
                        </p>
                    </div>
                    `;   
                } else {
                    var txt1 = `
                    <div name="bar" id="bar"></div>
                    <span id="hello">Hai there!♡</span>
                    <div id="descript">
                        <p id="student">
                            I'm Acelyn, a Computer Science student at the University of Pennsylvania. My interests lie in machine learning, big data and networked systems. When I'm not coding, you can find me scavengering old music, building with legos or binge-watching K-Dramas. 
                        </p>
                    </div>
                    `
                }
                track = !track
                div.append(txt1) 
           });
          });
      }

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
                            <div id="caption" class="caption">
                                <div name="bar" id="bar">

                                </div>
                                <span id="hello">Hai there!♡</span>
                                <div id="descript">
                                    <p id="student">
                                        I'm Acelyn, a junior studying Computer Science at the University of Pennsylvania. My interests lie in machine learning, big data and networked systems. When I'm not coding, you can find me scavengering old music, building with legos or binge-watching K-Dramas. 
                                    </p>
                                </div>
                            </div>
                    </div>
                </div>
                <Footer />
                <Footer_2 />
            </main>
        );
    }
}