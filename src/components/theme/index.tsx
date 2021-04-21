export { default as GlobalStyle } from './globalStyle'

export type Size = 'xs' | 's' | 'm' | 'l' | 'xl'
type Colors = 'primary' | 'secondaryLight' | 'secondaryDark' | 'white'

export const size: Record<Size, string> = {
    xs: '1.4rem',
    s: '1.6rem',
    m: '2.2rem',
    l: '2.8rem',
    xl: '3.4rem',
}

export const margin: Record<Size, string> = size
export const padding: Record<Size, string> = size


export const colors: Record<Colors, string> = {
    primary: '#5EBDC7',
    secondaryLight: '#353A4E',
    secondaryDark: '#2F3343',
    white: '#fff'
}

export const fontSize: Record<Size, string> = size

export const breakpoint: Record<string, string> = {
    s: "only screen and (max-width: 65rem)",
    m: "only screen and (max-width: 70rem)"
}