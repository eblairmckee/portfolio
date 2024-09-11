import React from 'react';
import { Window, WindowProps } from '../Window';

// TODO: replace with theme color picker?
export const Projects = (props: Omit<WindowProps, 'title' | 'children'>) => (
  <Window roundedBorder title="Side Note" width="70vw" maxWidth="300px" {...props}>
    <p>This website is shitty code I wrote years ago. If you want to see my latest work, slide into my DMs.</p>
  </Window>
);
