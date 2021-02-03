import React from 'react';

const skills = [
	'TypeScript',
	'JavaScript ES6',
	'React JS',
	'CSS',
	'Redux',
	'D3',
	'Node',
	'Jest',
	'Testing Library',
];
const learning = ['Next JS', 'Full Stack React', 'Data Visualization'];
const thingsIDo = [
	'Mentoring',
	'Design UI/UX',
	'Product Development',
	'Technical Writing',
	'Digital Marketing',
	'SEO Strategy',
];

export function Skills() {
	return (
		<div className="skills">
			<div className="skills__container">
				<h2>I make things with </h2>
				<div className="skills__grid">
					{skills.map((skill) => (
						<div className="skills__item">{skill}</div>
					))}
				</div>
			</div>
			<div className="background--inverse">
				<div className="skills__container">
					<h2>Right now, I'm learning </h2>
					<div className="skills__grid">
						{learning.map((skill) => (
							<div className="skills__item--inverse">{skill}</div>
						))}
					</div>
				</div>
			</div>
			<div className="skills__container">
				<h2>I also do </h2>
				<div className="skills__grid">
					{thingsIDo.map((skill) => (
						<div className="skills__item">{skill}</div>
					))}
				</div>
			</div>
		</div>
	);
}
