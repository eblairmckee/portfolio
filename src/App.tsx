import React from 'react';
import './App.css';
import { styled } from '@linaria/react';
import { Navbar, NavItemLinkProps } from './components/Navbar';
import { Window } from './components/Window';
import { colors } from './styles/theme';

// TODO: replace with social media links
const navItems: NavItemLinkProps[] = [
  {
    name: 'File',
    to: 'https://google.com',
  },
  {
    name: 'File',
    to: 'https://google.com',
  },
  {
    name: 'File',
    to: 'https://google.com',
  },
  {
    name: 'File',
    to: 'https://google.com',
  },
];

const Background = styled.div`
  background-image: radial-gradient(${colors.foreground} 1px, transparent 1px);
  background-position: 0px 0px;
  background-size: 3px 3px; 
  height: 100vh;
  width: 100%;
`

// TODO: remove this when I add draggable
const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Background>
      <Navbar links={navItems} />
      <Content>
        <Window title="Chat">Test</Window>
      </Content>
    </Background>
  );
}

const Wrapper = styled.div`
  background-color: ${colors.background};

`

export default App;
