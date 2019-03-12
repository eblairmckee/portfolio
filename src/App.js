import React, { Component } from 'react';
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import logo from './logo.svg';
import './App.scss';
import {Button} from './components/buttons/buttons.js';
import {Home} from './components/home';
import {Work} from './components/work/work';
import {Contact} from './components/contact/contact';
import {Menu} from './components/menu/menu';

class App extends Component {
  render() {
    return (
      <HashRouter>
          <div className="App">
          <Menu />
            <h1>Hi, I'm Blair</h1>
            <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/work" component={Work}/>
                <Route path="/contact" component={Contact}/>
            </div>
      </div>
      </HashRouter>
    );
  }
}

export default App;
