import { createContext } from 'react';
import { CSSColors } from './theme';

export const ThemeContext = createContext({
  themeColor: Object.values(CSSColors),
});
