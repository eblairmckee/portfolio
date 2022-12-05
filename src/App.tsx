import React from 'react';
import { styled } from '@linaria/react';
import { Helmet } from 'react-helmet';

import { Navbar, NavItemLinkProps } from './components/Navbar';
import { Window } from './components/Window';
import { colors, navbarHeight, roundedBorder } from './styles/theme';
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
  min-height: 100vh;
  height: 100%;
  width: 100%;
`;

const AppWrapper = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  flex-grow: 1;
  background-color: ${colors.foreground};
  padding: 2px;
`;

// TODO: stagger windows
// TODO: make window positions responsive
// TODO: find a way to overlay windows based on last interacted with

function App() {
  const bigWindowOffset = 50;
  const bigWindowTopOffset = navbarHeight + bigWindowOffset;
  const desktopIconXOffset = 50;
  const desktopIconYOffset = 100;
  return (
    <AppWrapper>
      <Helmet>
        <title>Blair McKee</title>
        <meta name="description" content="Blair McKee's personal portfolio" />
      </Helmet>
      <CheckeredBackground>
        <Navbar links={navItems} />
        {/* Draggable items lower in the DOM will overlay previous ones */}
        <DesktopIcon
          name="folder"
          to="https://twitter.com/blairwitch_eth"
          label="Twitter"
          top={50}
          right={desktopIconXOffset}
        />
        <DesktopIcon
          name="save"
          to="https://github.com/eblairmckee"
          label="Github"
          top={desktopIconYOffset * 2}
          right={desktopIconXOffset}
        />
        <DesktopIcon
          name="garbage"
          to="https://www.linkedin.com/in/eblairmckee/"
          label="Linkedin"
          top={desktopIconYOffset * 3.5}
          right={desktopIconXOffset}
        />
        <Window
          title="Welcome"
          top={bigWindowTopOffset}
          left={bigWindowOffset}
          width="min(500px, 50vw)"
          maxHeight="max(50vh, 500px)"
        >
          <h1>👋🏼 Hey, I'm Blair!</h1>
          <h2>I'm a frontend developer from Chicago</h2>
          <h3>I've been building things for the web for 5 years</h3>
          <p>
            Unlike most engineers, I was a Creative Writing major in college and kicked my career off as a marketing
            copywriter for a small tech startup outside of DC. I wanted to make sure my content was being presented the
            way I wanted on our websites... so naturally, I learned to code.
          </p>
          <p>
            I picked up WordPress soon after, and started freelancing custom websites for defense contractors. That
            naturally progressed into SPA development as React took the world by storm, and I moved out of static
            websites entirely.
          </p>
          <p>
            Around that time, I landed my first full time developer job at a healthcare tech company, Rally Health,
            which recently was acquired by United Healthcare. There, I built admin tooling and learned how large-scale
            production applications were architected while we migrated from Angular 1 to React. But my favorite project
            was a service discovery catalog app (loosely based on Spotify's Backstage) that I got to design and build.
            And that's when my love for design systems exploded.
          </p>
          <p>
            Not long after, I joined Coinbase's design system team and built out 7 cross-platform components and
            developed a system for SSR-friendly responsive styles (blog coming soon!). Recently, I was part of a
            multi-team effort to enable the new React Native Fabric architecture within our design system. I also helped
            design a "bootcamp project" program for new hires and mentored dozens of cohorts through their first 30 days
            at Coinbase.
          </p>
        </Window>
        <Window roundedBorder title="My Stack" top={200} right={170} width="min(50vw, 300px)">
          <ul>
            <li>Typescript</li>
            <li>React Native</li>
            <li>React</li>
            <li>Node</li>
            <li>NX</li>
            <li>GraphQL</li>
            <li>I actually 💖 CSS</li>
          </ul>
        </Window>
        <Window roundedBorder title="Side Projects" bottom={50} right="min(250px, 30vw)" width="min(50vw, 300px)">
          <p>
            On the side, I enjoy building mobile and web apps. Lately, I've been deep diving
            <a href="https://docs.swmansion.com/react-native-reanimated/" target="_blank" rel="noreferrer">
              React Native Reanimated
            </a>
            and a handful of different JAMstacks (like
            <a href="https://github.com/eblairmckee/pitterpatter" target="_blank" rel="noreferrer">
              GraphQL + NextJS
            </a>
            ).
          </p>
          <p>
            Throughout my career I've been an active speaker sharing my work and learnings within internal communities
            and conferences, and on
            <a href="https://dev.to/theblairwitch" rel="noreferrer" target="_blank">
              dev.to
            </a>
            .
          </p>
        </Window>
      </CheckeredBackground>
    </AppWrapper>
  );
}

export default App;
