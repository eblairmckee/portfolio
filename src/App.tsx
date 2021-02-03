import React from "react";
import "./App.css";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import ParallaxDemo from "./components/Parallax";
import { theme } from "utils/theme";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Wrapper>
				<ParallaxDemo />
			</Wrapper>
		</ThemeProvider>
	);
}

const Wrapper = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	background: ${({ theme }) => theme.black};
	height: 100vh;
	width: 100vw;
`;

const GlobalStyle = createGlobalStyle`
  html, body {
    box-sizing: border-box;
  }
 `;

export default App;
