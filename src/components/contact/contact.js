import React from 'react';
import '../../App.scss';
import './contact.modules.scss';

export class Contact extends React.Component{
    render() {
        return (
            <div className="contact">
                <div className="triangles-overlay">
                    <header>
                        <div className="wrapper">
                            <h1>Let's Talk</h1>
                            <div className="subheading">I am always open to new opportunities.</div>
                        </div>
                    </header>
                    <div className="grid contact-links">
                        <a href="https://www.linkedin.com/in/eblairmckee/" className="link">linkedin</a>
                        <a className="link" href="https://twitter.com/eblairmckee">twitter</a>
                        <a href="https://medium.com/@blairmckee" className="link">medium</a>
                    </div>
                </div>
            </div>
        )
    }
};
