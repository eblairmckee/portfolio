import React from 'react';
import Portfolio from '../portfolio/portfolio';
import '../../App.scss';
import './work.modules.scss';

export class Work extends React.Component{
    render() {
        return (
            <div className="work">
                <div className="triangles-overlay">
                    <header>
                        <div className="wrapper">
                            <h1>My Work</h1>
                        </div>
                    </header>
                    <Portfolio />
                </div>
            </div>
        )
    }
};
