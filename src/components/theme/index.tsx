export { default as GlobalStyle } from './globalStyle'

export type Spacer = Size | 'xl'
export type Size = 'xs' | 's' | 'm' | 'l'
export type HeadlineType = 'h1' | 'h2' | 'h3' | 'h4'
type Colors = 'primaryDark' | 'primaryLight' | 'secondary' | 'grey' | 'white'

export const size: Record<Size, string> = {
	xs: '1.2rem',
	s: '1.4rem',
	m: '1.6rem',
	l: '1.8rem',
}
export const spacer: Record<Spacer, string> = {
	xs: '1rem',
	s: '2rem',
	m: '3rem',
	l: '4rem',
	xl: '5rem'
}

export const headlineSize: Record<HeadlineType, string> = {
	h1: '4rem',
	h2: '2.4rem',
	h3: '2rem',
	h4: '1.8rem',
}

export const margin: Record<Size, string> = size
export const padding: Record<Size, string> = size

export const colors: Record<Colors, string> = {
	primaryDark: '#AAAAAA',
	primaryLight: '#E0EBED',
	secondary: '#171B20',
	grey: '#A1A1A1',
	white: '#fff',
}

export const fontSize: Record<Size, string> = size

export const breakpoint: Record<string, string> = {
	s: 'only screen and (max-width: 65rem)',
	m: 'only screen and (max-width: 70rem)',
}
type Font = {
	fontFamily: {
		default: string
		bold: string
	}
}

export const font: Font = {
	fontFamily: {
		default: "'gilroylight', Arial, sans-serif;",
		bold: "'gilroyextrabold', Arial, sans-serif;",
	},
}
