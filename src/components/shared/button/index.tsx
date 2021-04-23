import { FC } from 'react'
import styled, { css } from 'styled-components'
import { size, colors } from '../../theme'

const baseStyle = css`
	border: 0;
	background: none;
	cursor: pointer;
	font-size: ${size.xs};
`

const Button: FC = styled.button`
	${baseStyle}
	border: 1px solid ${colors.grey};
	border-radius: 3px;
	padding: ${size.xs} ${size.xs};
`

export default Button
