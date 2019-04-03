import React from 'react';
import '../../App.scss';
import './contact.modules.scss';
import {Helmet} from 'react-helmet';

export class Contact extends React.Component{
    render() {
        return (
            <div className="contact">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Contact | Blair McKee's Portfolio</title>
                    <link rel="canonical" href="https://blairmckee.com/contact/" />
                    <meta name="description" content="Let's talk! I'm always open to new opportunities. Connect with me on Twitter, LinkedIn, Dev.to, or Medium. " />
                </Helmet>
                <div className="triangles-overlay">
                    <header>
                        <div className="wrapper">
                            <h1>Let's Talk</h1>
                            <div className="subheading">I am always open to new opportunities.</div>
                        </div>
                    </header>
                    <div className="grid contact-links">
                        <a href="https://dev.to/eblairmckee" className="link">dev.to</a>
                        <a className="link" href="https://twitter.com/eblairmckee">twitter</a>
                        <a href="https://www.linkedin.com/in/eblairmckee/" className="link">linkedin</a>
                        <a href="https://medium.com/@blairmckee" className="link">medium</a>
                    </div>
                </div>
            </div>
        )
    }
};
