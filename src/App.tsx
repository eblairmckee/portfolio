import React, { useCallback } from 'react';
import { styled } from '@linaria/react';

import { Navbar, NavItemLinkProps } from './components/Navbar';
import { Window } from './components/Window';
import { colors, roundedBorder } from './styles/theme';
import { DesktopIcon } from './components/DesktopIcon';

// TODO: replace with social media links
const navItems: NavItemLinkProps[] = [
  {
    name: 'File',
    to: '/',
  },
  {
    name: 'Edit',
    to: '/',
  },
  {
    name: 'View',
    to: '/',
  },
  {
    name: 'Special',
    to: '/',
  },
];

const CheckeredBackground = styled.div`
  background-image: radial-gradient(${colors.background} 1px, transparent 1px);
  background-position: 0px 0px;
  background-size: 3px 3px;
  border-radius: ${roundedBorder}px;
  overflow: hidden;
  height: 100vh;
  `;
  
  const AppWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${colors.foreground};
  padding: 2px;
`;

// TODO: stagger windows
// TODO: make window positions responsive
// TODO: find a way to overlay windows based on last interacted with

function App() {


  return (
    <AppWrapper>
      <CheckeredBackground>
        <Navbar links={navItems} />
        {/* Draggable items lower in the DOM will overlay previous ones */}
        <DesktopIcon
          name="folder"
          to="https://twitter.com/blairwitch_eth"
          label="Twitter"
          top={50}
          right={50}
        />
        <DesktopIcon
          name="save"
          to="https://github.com/eblairmckee"
          label="Github"
          top={200}
          right={50}
        />
        <DesktopIcon
          name="garbage"
          to="https://www.linkedin.com/in/eblairmckee/"
          label="Linkedin"
          top={350}
          right={50}
        />
        <Window
          title="Welcome"
          top={100}
          left="min(5vw, 100px)"
          width="min(90vw, 500px)"
        >
          <h1>👋🏼 Hey, I'm Blair!</h1>
          <h2>I'm a frontend software engineer based in Chicago. </h2>
          <p>
            I learned everything I know from podcasts and online courses. I'm a
            reformed Creative Writing major who realized the starving artist
            lifestyle doesn't fit me (I'm a glutton for vegan food).
          </p>
          <p>
            Right now, I'm building the design system for Coinbase. On the side
            I've been deep diving React Native animations, GraphQL, and dipping
            my toes into Web3.{' '}
          </p>
        </Window>
        <Window
          roundedBorder
          title="My Stack"
          top={200}
          right={170}
          width="min(50vw, 300px)"
        >
          <ul>
            <li>Typescript</li>
            <li>React Native</li>
            <li>React</li>
            <li>GraphQL</li>
            <li>Node</li>
            <li>I actually like CSS</li>
          </ul>
        </Window>
      </CheckeredBackground>
    </AppWrapper>
  );
}

export default App;
