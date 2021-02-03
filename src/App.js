import React from 'react';
import { Header } from './components/header/Header';
import { Skills } from './components/skills/Skills';
import { Portfolio } from './components/portfolio/portfolio';
import { Contact } from './components/contact/contact';
import { About } from './components/about/About';

import './App.scss';
import { Helmet } from 'react-helmet';
import { withTheme } from 'styled-components';

function App(props) {
	return (
		<div className="App">
			<Helmet>
				<meta charSet="utf-8" />
				<title>Blair McKee's Portfolio</title>
				<link rel="canonical" href="https://blairmckee.com/" />
				<meta
					name="description"
					content="Hi, I'm Blair! I'm a UI Engineer & Designer. Check out my work. "
				/>
			</Helmet>
			<Header theme={props.theme} />
			<Skills />
			<Portfolio />
			<About />
			<Contact />
		</div>
	);
}

export default withTheme(App);
