import React from 'react';
import { Window, WindowProps } from '../Window';

export const Stack = (props: Pick<WindowProps, 'top' | 'left' | 'right' | 'bottom'>) => (
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
