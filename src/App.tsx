import React, { useCallback, useRef, useState } from 'react';
import { styled } from '@linaria/react';
import { Helmet } from 'react-helmet';

import { Navbar, NavItemLinkProps } from './components/Navbar';
import { Bio, Projects, Stack } from './components/Home';
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
  min-height: 100vh;
  overflow: hidden;
`;

const AppWrapper = styled.div`
  height: 100vh;
  max-height: 100vh;
  width: 100%;
  background-color: ${colors.foreground};
  padding: 5px;
`;

function App() {
  const [activeWindow, setActiveWindow] = useState<number | undefined>(1);
  const lastActiveWindow = useRef<number | undefined>(2);

  const windowDragHandler = useCallback(
    (idx?: number) => {
      lastActiveWindow.current = activeWindow;
      setActiveWindow(idx);
    },
    [activeWindow]
  );

  const getZIndex = useCallback(
    (index: number) => {
      if (index === activeWindow) return 3;
      if (index === lastActiveWindow.current) return 2;
      return 1;
    },
    [activeWindow]
  );

  const bigWindowOffset = 50;
  const bigWindowTopOffset = navbarHeight + bigWindowOffset;
  const desktopIconXOffset = 20;
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
        <Projects
          bottom="5vh"
          right="max(20vw, 50px)"
          onDrag={() => windowDragHandler(3)}
          zIndex={getZIndex(3)}
          isActive={activeWindow === 3}
        />
        <Bio
          top={bigWindowTopOffset}
          left="10vw"
          onDrag={() => windowDragHandler(2)}
          zIndex={getZIndex(2)}
          isActive={activeWindow === 2}
        />
        <Stack
          bottom="10vh"
          right="10vw"
          onDrag={() => windowDragHandler(1)}
          zIndex={getZIndex(1)}
          isActive={activeWindow === 1}
        />
      </CheckeredBackground>
    </AppWrapper>
  );
}

export default App;
