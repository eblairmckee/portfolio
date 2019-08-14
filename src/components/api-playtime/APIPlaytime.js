import React, { useState, useEffect } from 'react';

export function APIPlaytime(props) {
	const [planets, setPlanets] = useState({});

	useEffect(() => {
		fetch('https://swapi.co/api/planets/4/')
			.then(res => res.json())
			.then(res => setPlanets({ planets: res }));
	}, []);

	return <div>{JSON.stringify(planets)}</div>;
}
