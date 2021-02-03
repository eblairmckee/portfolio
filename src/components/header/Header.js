import React from 'react';
import { useTheme } from '../../ThemeContext';
import styled from 'styled-components';
import {
	buttonBackgroundColor,
	buttonTextColor,
	headerBackgroundColor,
	headingColor,
	headingShadow,
} from '../../theme';

export function Header(props) {
	const themeToggle = useTheme();

	const Button = styled.button`
		background: ${buttonBackgroundColor};
		border: none;
		border-radius: 0.3em;
		box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
		color: ${buttonTextColor};
		cursor: pointer;
		font-size: 1em;
		padding: 0.5em;
	`;

	const Header = styled.header`
		background: ${headerBackgroundColor};
	`;

	const Heading = styled.h1`
		color: ${headingColor};
		text-shadow: ${headingShadow};
	`;

	const Subheading = styled.h3`
		color: ${headingColor};
		text-shadow: ${headingShadow};
	`;

	return (
		<Header>
			<Button onClick={() => themeToggle.toggle()}>
				<img
					className="mode__toggle"
					alt="Dark mode toggle"
					src={
						props.theme.mode === 'dark'
							? '../../../sun.png'
							: '../../../moon.png'
					}
				/>
			</Button>
			<div className="header__wrapper">
				<Heading>Hi, I'm Blair.</Heading>
				<Subheading>I'm a UI Engineer & Designer</Subheading>
			</div>
		</Header>
	);
}
