import React from 'react';
import { Window, WindowProps } from '../Window';

// TODO: replace with a Finder window with icons for each item
export const Stack = (props: Omit<WindowProps, 'title' | 'children'>) => (
  <Window roundedBorder title="My Stack" width="min(50vw, 300px)" {...props}>
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
);
