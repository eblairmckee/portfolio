import React from 'react';
import { Window, WindowProps } from '../Window';

export const Bio = (props: Omit<WindowProps, 'title' | 'children'>) => (
  <Window editable title="Notepad" width="80vw" maxWidth="550px" height="min(70vh, 500px)" roundedBorder {...props} />
);
