import React from 'react';
import { Header } from './components/header/Header';
import { Skills } from './components/skills/Skills';
import { Portfolio } from './components/portfolio/portfolio';
import { Contact } from './components/contact/contact';

import './App.scss';
import { Helmet } from 'react-helmet';

export default function App() {
	return (
		<div className="App">
			<Helmet>
				<meta charSet="utf-8" />
				<title>Blair McKee's Portfolio</title>
				<link rel="canonical" href="https://blairmckee.com/" />
				<meta name="description" content="Hi, I'm Blair! I'm a front end developer, designer, and digital marketer. Check out my work. " />
			</Helmet>
			<Header />
			<Skills />
			<Portfolio />
			<Contact />
		</div>
	);
}
