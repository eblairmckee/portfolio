import React from 'react';
import {
    NavLink
  } from "react-router-dom";
import '../App.scss';

export class Home extends React.Component{
    render() {
        return (
            <div className="home">
                <div className="triangles-overlay">
                    <header>
                        <div className="wrapper">
                            <h1>Hi, I'm Blair</h1>
                            <div className="subheading">I'm a digital marketer, web designer, and developer. </div>
                        </div>
                    </header>
                    <div class="what-i-do-section">
                        <h2>What I Do</h2>
                        <div class="what-i-do-list">
                            <ul>
                                <li>
                                    Web design and front end development</li>
                                <li>
                                    UI/UX for SaaS applications</li>
                                <li>
                                    SEO &amp; SEM</li>
                                <li>
                                    Digital marketing strategy</li>
                                <li>
                                    Copy writing &amp; email marketing</li>
                                <li>
                                    Graphic design</li>
                            </ul>
                            <p>
                            <NavLink className="link" to="/work" onClick={this.handleMenuLinkClick}>See my work</NavLink>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="contact-section">
                    <div class="circle">
                        <h2>
                            <NavLink className="link" to="/contact" onClick={this.handleMenuLinkClick}>Let's Talk</NavLink>
                        </h2>
                    </div>
                </div>
            </div>
        )
    }
};
