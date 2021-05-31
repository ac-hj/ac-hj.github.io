import React, { Component } from 'react';
import { Footer } from './Footer'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ReactDOM from 'react-dom'
import './styles/project.css'
import moviePic from './media/movie_match.png'
import fbPic from './media/fb.png'
import $ from 'jquery';
import jQuery from 'jquery';
import { Footer_2 } from './Footer_2'
import  p2_background from './media/fb.png'
import p3_background from './media/weather.png'
import p4_background from './media/movie_match.png'

export class Project extends Component {

  componentDidMount() {
    jQuery(function($){
        var track_1 = true;
        var track_2 = true;
        var track_3 = true;
        var track_4 = true;

        //Take your div into one js variable
        var div = $("#project-scroll");
        var div_2 = $("#project-1");
        //Take the current position (vertical position from top) of your div in the variable
        var pos = div_2.position();
        //Now when scroll event trigger do following
        $(window).on('scroll', function () {
         var windowpos = $(window).scrollTop();
         //Now if you scroll more than 100 pixels vertically change the class to AfterScroll
         // I am taking 100px scroll, you can take whatever you need
         console.log(windowpos)
            console.log(pos.top)
         if (windowpos >= (pos.top - 100)) {
           div.addClass("after-scroll");
         }

        var main = $("#main-project");
        var arrow = $("#arrow");
        var arrow_bkg = $("#arrow-bkg");
        var arrow_p = $("#arrow-p")
        if($(window).scrollTop() + $(window).height() == $(document).height()) {
            $(arrow).css('bottom', '10vh');
            $(arrow_bkg).css('margin-bottom', '10vh');
            $(arrow_p).css('bottom', '10vh');
        } else {
            $(arrow).css('bottom', '0vh');
            $(arrow_bkg).css('margin-bottom', '0vh');
            $(arrow_p).css('bottom', '0vh');
        }
       });
       
        setTimeout(fade_out, 2000);

        function fade_out() {
            $("#instruct").fadeOut().empty();
        }
        
        $("#project-3").on("click", function() {
            if (track_3) {
                $('#project-3').css({backgroundImage : 'url(' + p3_background + ')'});
                $('#project-3').css({backgroundSize : '100% 100%'});
                $('#project-3').css({backgroundRepeat : 'no-repeat'});
                $('#project-3').css({overflow : 'hidden'});
                $('#pw-name').css({opacity: '0'});
                $('#pw-descript').css({opacity: '0'});
                track_3 = false;
            } else {
                $("#project-3").css('background-image', 'none');
                $('#project-3').css({backgroundColor : '#FAF4F0'});
                $('#pw-name').css({opacity: '1'});
                $('#pw-descript').css({opacity: '1'});
                track_3 = true;
            }
        });

        $("#project-2").on("click", function() {
            if (track_2) {
                var imageUrl = process.env.PUBLIC_URL + "/media/fb.png";
                // $('#project-2').css({backgroundColor : 'transparent'});
                // console.log(process.env.PUBLIC_URL);
                $('#project-2').css({backgroundImage : 'url(' + p2_background + ')'});
                $('#project-2').css({backgroundSize : '100% 100%'});
                $('#project-2').css({backgroundRepeat : 'no-repeat'});
                $('#project-2').css({overflow : 'hidden'});
                $('#fb-name').css({opacity: '0'});
                $('#fb-descript').css({opacity: '0'});
                track_2 = false;
            } else {
                $("#project-2").css('background-image', 'none');
                $('#project-2').css({backgroundColor : '#FAF4F0'});
                $('#fb-name').css({opacity: '1'});
                $('#fb-descript').css({opacity: '1'});
                track_2 = true;
            }
        });

        $("#project-4").on("click", function() {
            if (track_4) {
                // $('#project-2').css({backgroundColor : 'transparent'});
                // console.log(process.env.PUBLIC_URL);
                $('#project-4').css({backgroundImage : 'url(' + p4_background + ')'});
                $('#project-4').css({backgroundSize : '100% 100%'});
                $('#project-4').css({backgroundRepeat : 'no-repeat'});
                $('#project-4').css({overflow : 'hidden'});
                $('#movie-name').css({opacity: '0'});
                $('#movie-descript').css({opacity: '0'});
                track_4 = false;
            } else {
                $("#project-4").css('background-image', 'none');
                $('#project-4').css({backgroundColor : '#FAF4F0'});
                $('#movie-name').css({opacity: '1'});
                $('#movie-descript').css({opacity: '1'});
                track_4 = true;
            }
        });

        

        // $(main).on('scroll', function()
        // {
        //     var div = $(this);
        //     console.log(Math.trunc(div.height()))
        //     console.log(div[0].scrollHeight - div.scrollTop())
        //     if (div[0].scrollHeight - div.scrollTop() == Math.trunc(div.height())) //scrollTop is 0 based
        //     {
                
       
        //     }
        // });
      });
  }
  
  render() {
    return (
     <html>
      <Helmet>
        <title> Project </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <body>
        <div class='main' id='main-project'>
            <div class="sub-main">
                <p id="instruct">Click on the boxes to see demo pictures!</p>
                <div id="project-1" >
                    <div id="bar-movie">
                        {/* <a id="movie-match-a"> 🏞
                            <div id="movie-match-div"><img alt="movie-match-example" id="movie-match" src={moviePic}/></div>
                        </a> */}
                        <a id="movie" href="https://github.com/ac-hj/boxoffice-forecaster" target="_blank">
                                🔗</a>
                    </div>
                    <div class="movie">
                        <span id="bo-name"> Boxoffice Forecaster 🎥</span>
                        <div id="bo-descript">
                            <p id="detail">Final project for CIS545: Big Data Analytics. Used iMDb data to train a model that would predict the success of a movie in the box office
                            based on various features, such as releasing period, actors, directors, etc. Performed data preprocessing, feature engineering, EDA, and modeling.</p>
                            <p class="detail-1" id="tech-detail">Tech stack: pandas, sklearn, SQL, jsoup</p>
                        </div>
                    </div>
                </div>
                <div id="project-scroll" class="before-scroll">
                    <div id="project-2" >
                        <div id="bar-fb">
                            {/* <a id="fb-a"> 🏞
                                <div id="fb-div"><img alt="fb-example" id="fb" src={fbPic}/></div>
                            </a> */}
                            {/* <a id="fb" href="https://github.com/ac-hj/Movie-Match-" target="_blank">
                                    🔗</a> */}
                        </div>
                        <div class="fb">
                            <span id="fb-name">PennBook 🗣</span>
                            <div id="fb-descript">
                                <p id="detail">Final project for NETS212: Scalable and Cloud Computing. A scalable mock-up Facebook web app that users can create/edit their own profiles, upload text/image posts,
                                make friend requests, chat with their friends live, etc. Took charge of frontend and entire backend logic (database designs + implementation) for posts and ensuring eventual consistency across different users.<br></br> Won Best Project Award (1st) 🏆</p>
                                <p class="detail-2" id="tech-detail">Tech stack: AWS, jQuery/Ajax, Apache Spark, JavaScript, HTML, CSS, Express, Node</p>
                            </div>
                        </div>
                    </div>
                    <div id="project-3">
                        <div id="bar-pw">
                            {/* <a id="fb-a"> 🏞
                                <div id="fb-div"><img alt="fb-example" id="fb" src={fbPic}/></div>
                            </a> */}
                            <a id="pw" href="https://github.com/ac-hj/weather-teller" target="_blank">
                                    🔗</a>
                        </div>
                        <div class="pw">
                            <span id="pw-name">Weather Teller ⛅️</span>
                            <div id="pw-descript">
                                <p id="detail">A web app that shows current weather for indicated locations on the map</p>
                                <p class="detail-3" id="tech-detail">Tech stack: Node.js, EJS, HTML/CSS, Ajax/Jquery, Google Maps API, OpenWeatherMap API, Procreate</p>
                            </div>
                        </div>
                    </div>
                    <div id="project-4">
                        <div id="bar-art">
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
                                <p class="detail-4" id="tech-detail">Tech stack: Java (jsoup + regex)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a id="arrow" href="#project-4">
                <div id="arrow-bkg">
                    <p id="arrow-p">
                        v
                    </p>
                </div>
            </a>
            <Footer />
        </div>
        <Footer_2 />
      </body>
     </html>
    )
    }
}