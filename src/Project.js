import React, { Component } from 'react';
import { Footer } from './Footer'
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom'
import './styles/project.css'
import moviePic from './styles/movie_match.png'
import fbPic from './styles/fb.png'
import $ from 'jquery';

export class Project extends Component {

  
  
  render() {
    return (
     <html>
      <div class='main'>
       <div id="project-1" >
            <div id="bar-movie">
                {/* <a id="movie-match-a"> 🏞
                    <div id="movie-match-div"><img alt="movie-match-example" id="movie-match" src={moviePic}/></div>
                </a> */}
                <a id="movie" href="https://github.com/ac-hj/Movie-Match-" target="_blank">
                        🔗</a>
            </div>
            <div class="movie">
                <span id="movie-name">Movie Match 🍿</span>
                <div id="movie-descript">
                    <p id="detail">Final project for NETS150: Network and Social Systems Engineering. Webscraped iMDb site to build a recommendation application based on user's genre preference,
                     favorite movies and user's friends' favorite movies (optional). Incorporated Vector Space concepts, such as Vector Space Model and cosine similarity, to measure the closeness 
                     between the users' chosen movies and other movies. Also applied the idea of membership closure for friends' favorite movies.</p>
                    <p id="tech-detail">Technologies used: Java (jsoup + regex)</p>
                </div>
            </div>
        </div>
        <div id="project-2" >
            <div id="bar-fb">
                {/* <a id="fb-a"> 🏞
                    <div id="fb-div"><img alt="fb-example" id="fb" src={fbPic}/></div>
                </a> */}
                <a id="fb" href="https://github.com/ac-hj/Movie-Match-" target="_blank">
                        🔗</a>
            </div>
            <div class="fb">
                <span id="fb-name">PennBook 💻</span>
                <div id="fb-descript">
                    <p id="detail">Final project for NETS212: Scalable and Cloud Computing. A scalable, user-friendly mockup Facebook web application that users can create/edit their own profiles, upload text/image posts,
                    make friend requests, chat with their friends live, get live newsfeed according to their interests and see visualization for their friend network. Took charge of frontend and entire backend logic (database designs + implementation) for posts and ensuring eventual consistency across different users.<br></br>Won Best Project Award (1st) 🏆</p>
                    <p id="tech-detail">Technologies used: AWS, jQuery/Ajax, Apache Spark, JavaScript, HTML, CSS</p>
                </div>
            </div>
        </div>
        <div id="project-3">
            <div id="bar-pw">
                {/* <a id="fb-a"> 🏞
                    <div id="fb-div"><img alt="fb-example" id="fb" src={fbPic}/></div>
                </a> */}
                <a id="pw" href="https://github.com/ac-hj/Movie-Match-" target="_blank">
                        🔗</a>
            </div>
            <div class="pw">
                <span id="pw-name">Personal Website 🙈</span>
                <div id="pw-descript">
                    <p id="detail">Built and designed a personal website for fun. Changed designs from the previous personal website built in Summer 2020.</p>
                    <p id="tech-detail">Technologies used: React, JavaScript, HTML, CSS, Figma</p>
                </div>
            </div>
        </div>
        <div id="project-4">
            <div id="bar-art">
                {/* <a id="fb-a"> 🏞
                    <div id="fb-div"><img alt="fb-example" id="fb" src={fbPic}/></div>
                </a> */}
                <Link id="art" onClick={() => this.props.action('gallery')}>🔗</Link>
                {/* <a id="art" target="_blank">
                        🔗</a> */}
            </div>
            <div class="art">
                <span id="art-name">Random art stuf 🎨</span>
                <div id="art-descript">
                    <p id="detail"> Collection of artworks that I created during my free time. </p>
                    <p id="tech-detail">Technologies used: Pencil, Procreate</p>
                </div>
            </div>
        </div>
        <a id="arrow" href="#project-4">
            <div id="arrow-bkg">
                <p>
                    v
                </p>
            </div>
        </a>
        <Footer />
      </div>
     </html>
    )
    }
}