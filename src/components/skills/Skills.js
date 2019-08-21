import React from 'react';

const skills = ['JavaScript ES6', 'React JS', 'Sass', 'CSS', 'Node JS', 'Webpack', 'Material UI', 'Bootstrap'];
const thingsIDo = ['Web Design', 'UX for Web Apps', 'Digital Marketing', 'Technical SEO', 'Product Development', 'Copywriting'];

export function Skills() {
	return (
		<div className="skills">
			<div className="skills__container">
				<h2>I make things with </h2>
				<div className="skills__grid">
					{skills.map(skill => (
						<div className="skills__item">{skill}</div>
					))}
				</div>
			</div>
			<div className="skills__container">
				<h2>I also do </h2>
				<div className="skills__grid">
					{thingsIDo.map(skill => (
						<div className="skills__item">{skill}</div>
					))}
				</div>
			</div>
		</div>
	);
}
