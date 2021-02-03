import React from "react";
import styled from "styled-components";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import { Planet, Asteroid } from "./CelestialBodies";
import { TopographyBackground, DustBackground } from "./Textures";
import { Heading1 } from "components/Typography";

const ParallaxDemo = () => {
	let parallax: any;

	return (
		// @ts-ignore
		<Parallax pages={3} ref={(ref: any) => (parallax = ref)}>
			{/* first screen */}
			<TopographyLayer offset={0} speed={0.3}></TopographyLayer>
			<DustLayer offset={0} speed={0.2}>
				<Heading1 onClick={() => parallax.scrollTo(1)}>
					Oh, hello there.
				</Heading1>
				<Planet type="pluto" position="left" />
				<Asteroid position="right" />
			</DustLayer>
			<ParallaxLayer offset={0.4} speed={0.7}>
				<Planet type="trippy" />
				<Asteroid position="left" />
			</ParallaxLayer>
			<ParallaxLayer offset={0.8} speed={0.5}>
				<Planet type="pluto" position="right" />
				<Asteroid />
			</ParallaxLayer>

			{/* second screen */}
			<TopographyLayer offset={0.99} speed={0.3}></TopographyLayer>
			<DustLayer offset={0.99} speed={0.2}>
				<Asteroid position="left" />
				<Planet type="pluto" />
			</DustLayer>
			<ParallaxLayer offset={1} speed={0.6}>
				<Asteroid position="right" />
			</ParallaxLayer>

			{/* third screen */}
			<TopographyLayer offset={1.69} speed={0.3}></TopographyLayer>
			<DustLayer offset={1.79} speed={0.2}>
				<Asteroid />
				<Planet type="pluto" position="center" />
			</DustLayer>
			<ParallaxLayer offset={2} speed={0.6}>
				<Asteroid />
			</ParallaxLayer>
		</Parallax>
	);
};

const TopographyLayer = styled(ParallaxLayer)`
	${TopographyBackground};
	background-repeat: repeat !important;
	height: 100vh;
	width: 100vw;
`;

const DustLayer = styled(ParallaxLayer)`
	${DustBackground};
	background-repeat: repeat !important;
	height: 100vh;
	width: 100vw;
`;

export default ParallaxDemo;
