import { createContext, useContext } from 'react';
import { CSSColors } from './theme';

export const ThemeContext: Record<string, keyof typeof CSSColors> = createContext({
  themeColor: Object.values(CSSColors),
});
