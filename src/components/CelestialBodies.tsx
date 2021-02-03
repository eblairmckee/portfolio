import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as AsteroidIcon } from "images/asteroidColor.svg";
import { animated, useSpring } from "react-spring";
import { spin } from "utils/animations";

interface CelestialProps {
	onClick?: any;
	position?: string;
	type?: string;
}

export const Planet: React.FC<CelestialProps> = ({
	onClick,
	position,
	type,
}) => {
	const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 } });
	return type === "pluto" ? (
		<PlutoStyles style={fadeIn} onClick={onClick} position={position} />
	) : (
		<TrippyPlanetStyles
			style={fadeIn}
			onClick={onClick}
			position={position}
		>
			<Ring>
				<svg>
					<circle cx="50%" cy="50%" r="120px"></circle>
				</svg>
			</Ring>
			<DashedRing>
				<svg>
					<circle cx="50%" cy="50%" r="150px"></circle>
				</svg>
			</DashedRing>
			<OuterRing>
				<svg>
					<circle cx="50%" cy="50%" r="160px"></circle>
				</svg>
			</OuterRing>
		</TrippyPlanetStyles>
	);
};

const PlutoStyles = styled(animated.div)<{ position?: string }>`
	background-image: linear-gradient(#632b6b, #271136);
	border-radius: 50px;
	height: 100px;
	width: 100px;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
	margin: ${({ position }) =>
		position === "left"
			? "0 0 0 10%"
			: position === "right"
			? "0 0 0 80%"
			: "0 0 0 50%"};
`;

const TrippyPlanetStyles = styled(animated.div)<{ position?: string }>`
	background: radial-gradient(
			circle at top left,
			rgba(255, 255, 255, 0.5),
			transparent 100px
		),
		radial-gradient(
			circle at top right,
			rgba(255, 255, 255, 0.5),
			transparent 100px
		),
		radial-gradient(
			at bottom left,
			rgba(255, 0, 255, 0.5),
			transparent 400px
		),
		radial-gradient(
			at bottom right,
			rgba(255, 100, 100, 0.5),
			transparent 400px
		);
	border-radius: 50%;
	height: 200px;
	position: relative;
	width: 200px;
	box-shadow: 0 10px 20px rgba(255, 255, 255, 0.103);
	margin: ${({ position }) =>
		position === "left"
			? "0 0 0 10%"
			: position === "right"
			? "0 0 0 80%"
			: "0 0 0 50%"};
`;

const Ring = styled.div`
	position: absolute;
	left: -30px;
	top: -30px;
	width: 260px;
	height: 260px;
	svg {
		width: 100%;
		height: 100%;
		animation: ${spin} 30s linear infinite;
		circle {
			stroke-width: 2;
			stroke-dasharray: 150, 5;
			fill: none;
			stroke: rgba(255, 255, 255, 0.2);
		}
	}
`;

const DashedRing = styled.div`
	position: absolute;
	left: -60px;
	top: -60px;
	width: 320px;
	height: 320px;
	svg {
		width: 100%;
		height: 100%;
		animation: ${spin} 60s linear infinite;
		circle {
			stroke-width: 5;
			stroke-dasharray: 1, 10;

			fill: none;
			stroke: rgba(255, 255, 255, 0.3);
		}
	}
`;

const OuterRing = styled.div`
	position: absolute;
	left: -80px;
	top: -80px;
	width: 360px;
	height: 360px;
	svg {
		width: 100%;
		height: 100%;
		animation: ${spin} 120s linear infinite;
		circle {
			stroke-width: 1;
			stroke-dasharray: 220, 3;
			fill: none;
			stroke: rgba(255, 255, 255, 0.3);
		}
	}
`;

export const Asteroid: React.FC<CelestialProps> = ({ onClick, position }) => {
	const [clicked, setClicked] = useState<boolean>(false);
	const size = useSpring({
		transform: clicked ? "scale(2)" : "scale(1)",
		from: {
			transform: "scale(1)",
		},
	});
	return (
		<AsteroidStyles
			style={size}
			onClick={() => setClicked(!clicked)}
			position={position}
		/>
	);
};

const AsteroidStyles = styled(animated(AsteroidIcon))<{ position?: string }>`
	width: 100px;
	height: 100px;
	fill: white;
	cursor: pointer;
	margin: ${({ position }) =>
		position === "left"
			? "0 0 0 10%"
			: position === "right"
			? "0 0 0 80%"
			: "0 0 0 50%"};
`;
