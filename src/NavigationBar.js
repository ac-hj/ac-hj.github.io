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
                 <div className="nav-bar">
                    <div className="directory">
                        <Link className="nav" to="" id="home" onClick={() => {this.setState({page: 'home'}, this.render)}}>🏠</Link>
                        {/* <Link onClick={() => {this.setState({page: 'introduction'})}}>Introduction</Link> */}
                        <Link className="nav" to="" id="about" onClick={() => {this.setState({page: 'aboutme'})}}>about me</Link>
                        <Link className="nav" to="" id="project" onClick={() => {this.setState({page: 'project'})}}>my projects</Link>
                    </div>
                    {/* <img id="bunny" src={bunny}></img> */}
                </div>
                { this.renderPage() }
            </main>
        );
    }
}
