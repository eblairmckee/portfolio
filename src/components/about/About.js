import React from 'react';

const hobbies = ['Baptiste Yogi', 'Classical Pianist', 'Vegan Chef', 'Dog Mom', 'Poet', 'Painter'];

export function About() {
	return (
		<div>
			<div className="background--inverse">
				<div className="skills__container">
					<h2>When I'm not coding, I am a</h2>
					<div className="skills__grid">
						{hobbies.map(skill => (
							<div className="skills__item--inverse">{skill}</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
