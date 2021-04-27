import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Introduction } from './intro';
import { HomePage } from './HomePage';
import { Project } from './Project';
import './styles/navigation.css';
import {Gallery} from './Gallery'

export class NavigationBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 'home'
        }
        this.renderPage = this.renderPage.bind(this);
        this.handler = this.handler.bind(this);
    }

    // Ensures the components are updated only if the page is set to a diff value
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     this.renderPage();
    //     return (this.state.page === nextState.page);
    // }

    handler(page) {
        this.setState({
            page: page
        });
    }

    renderPage() {
        let page = this.state.page;
            if (page === 'home') {
                return (
                    <HomePage page={this.state.page}/>
                );
            } else if (page === 'aboutme') {
                return (
                    <div>
                        <Introduction page={this.state.page}/>
                    </div>
                );
            } else if (page == 'project') {
                return (
                    <div>
                        <Project page={this.state.page} action={this.handler}/>
                    </div>
                )
            } else if (page == 'gallery') {
                return (
                    <div>
                        <Gallery page={this.state.page}/>
                    </div>
                )
            }

    }

    render() {
        return (
            <main>
                 <div class="nav-bar">
                    <div class="directory">
                        <Link class="nav" id="home" onClick={() => {this.setState({page: 'home'}, this.render)}}>🏠</Link>
                        {/* <Link onClick={() => {this.setState({page: 'introduction'})}}>Introduction</Link> */}
                        <Link class="nav" id="about" onClick={() => {this.setState({page: 'aboutme'})}}>about me</Link>
                        <Link class="nav" id="project" onClick={() => {this.setState({page: 'project'})}}>my projects</Link>
                    </div>
                </div>
                { this.renderPage() }
            </main>
        );
    }
}
