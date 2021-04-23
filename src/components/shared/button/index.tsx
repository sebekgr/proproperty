import { FC, ButtonHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'
import { size, colors } from '../../theme'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	secondary?: boolean
}

export const baseStyle = css`
	border: 0;
	background: none;
	cursor: pointer;
	font-size: ${size.xs};
	border: 1px solid ${colors.grey};
	border-radius: 5px;
	padding: ${size.xs} ${size.xs};
`

export const secondaryStyle = css`
	color: ${colors.white};
	background-color: ${colors.buttonSecondary};
	border: none;
`


const Button: FC<Props> = styled.button<Props>`
	${baseStyle}
	${({ secondary }) => secondary && secondaryStyle}
`

export default Button
