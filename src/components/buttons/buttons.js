import React from 'react';
import './buttons.modules.scss';
import '../../App.scss';

export class Button extends React.Component {
    render() {
        return (
            <div>
                <button className="primary">I'm using regular syntax</button>
            </div>
        )
    }
};