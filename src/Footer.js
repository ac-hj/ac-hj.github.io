import React, { Component } from 'react';
import github from './media/github2.png';
import email from './media/email.png';
import './styles/footer.css';

export class Footer extends Component {

    render() {
        return(
            <footer>
                <div id="icon">
                    <a id ="linkedin" href="https://www.linkedin.com/in/acelynchoi/" target="_blank">
                        <span id="linked">in</span>
                    </a>
                    <a id ="github" href="https://github.com/ac-hj" target="_blank">
                        <img alt="github" id="git" src={ github } />
                    </a>
                    <a id="emailLink" href="mailto:choihye@seas.upenn.edu" >
                        <img alt="email" id="email" src={ email } />
                    </a>
                </div>
            </footer>
        );
    }
}