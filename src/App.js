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
import {Helmet} from "react-helmet";
import { Space } from './components/data-vis/data-vis';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Blair McKee's Portfolio</title>
                <link rel="canonical" href="https://blairmckee.com/" />
                <meta name="description" content="Hi, I'm Blair! I'm a web designer, developer, and digital marketer. Check out my work. " />
            </Helmet>
            <Menu />
            <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/work" component={Work}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/data-vis" component={Space}/>
            </div>
      </div>
      </HashRouter>
    );
  }
}

export default App;
