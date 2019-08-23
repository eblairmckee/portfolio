import theme from 'styled-theming';

export const backgroundColor = theme('mode', {
	light: '#fff',
	dark: '#35123f'
});

export const textColor = theme('mode', {
	light: '#000',
	dark: '#fff'
});

export const buttonBackgroundColor = theme('mode', {
	light: '#222',
	dark: 'transparent'
});

export const buttonTextColor = theme('mode', {
	light: '#fff',
	dark: '#fff'
});

export const headerBackgroundColor = theme('mode', {
	light: 'linear-gradient( #33fff0, #ffbdd5, #fff)',
	dark: 'linear-gradient(#b50887, #9b218a, #633073,#35123f)'
});

export const headingColor = theme('mode', {
	light: '#33fff0',
	dark: '#fff'
});

export const headingShadow = theme('mode', {
	light: '5px 5px #b50887',
	dark: '5px 5px rgba(255, 255, 255, 0.5)'
});
