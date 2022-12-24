import React from 'react';
import { Window, WindowProps } from '../Window';

// TODO: I don't like this. what else could I add here?
export const Projects = (props: Omit<WindowProps, 'title' | 'children'>) => (
  <Window roundedBorder title="Side Projects" width="70vw" maxWidth="300px" {...props}>
    <p>
      On the side, I enjoy building mobile and web apps. Lately, I've been deep diving &nbsp;
      <a href="https://docs.swmansion.com/react-native-reanimated/" target="_blank" rel="noreferrer">
        React Native Reanimated
      </a>
      &nbsp; and a handful of different JAMstacks (like&nbsp;
      <a href="https://github.com/eblairmckee/pitterpatter" target="_blank" rel="noreferrer">
        GraphQL + NextJS
      </a>
      ).
    </p>
    <p>
      Throughout my career I've been an active speaker sharing my work and learnings within internal communities and
      conferences, and on&nbsp;
      <a href="https://dev.to/theblairwitch" rel="noreferrer" target="_blank">
        dev.to
      </a>
      .
    </p>
  </Window>
);
