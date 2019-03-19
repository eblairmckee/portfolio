import React, { Component } from 'react';
import {
    Route,
    HashRouter
  } from "react-router-dom";
import './App.scss';
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
