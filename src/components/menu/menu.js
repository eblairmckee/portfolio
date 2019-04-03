import React from 'react';
import {
    NavLink
  } from "react-router-dom";
import '../../App.scss';
import './menu.modules.scss';

export class Menu extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isChecked: false
        }
        this.handleMenuLinkClick = this.handleMenuLinkClick.bind(this);
    }

    handleMenuLinkClick(event) {
        this.setState({
            isChecked : !this.state.isChecked
        })
    }

    render(){
        return (
            <div>
                <input id="burger" type="checkbox" onClick={this.handleMenuLinkClick} checked={this.state.isChecked} />
                <label for="burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <nav>
                    <ul>
                        <li><NavLink exact to="/" onClick={this.handleMenuLinkClick}>Home</NavLink></li>
                        <li><NavLink to="/work" onClick={this.handleMenuLinkClick}>Work</NavLink></li>
                        <li><NavLink to="/contact" onClick={this.handleMenuLinkClick}>Contact</NavLink></li>
                        <li><NavLink to="/data-vis" onClick={this.handleMenuLinkClick}>Experiment</NavLink></li>
                    </ul>
                </nav>
            </div>
        )
    }
}