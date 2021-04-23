import { FC } from 'react'
import styled from 'styled-components'
import { font, headlineSize, HeadlineType } from '../../theme'

type HeadlineProps = {
	as?: HeadlineType
}

const StyledHeadLine: FC<HeadlineProps> = styled.h1<HeadlineProps>`
	${({ as }) => `
        font-family: ${font.fontFamily.default};
        font-size: ${headlineSize[as as HeadlineType]}
    `}
`

const Headline: FC<any> = ({ as = 'h4', children, ...props }) => {
	return (
		<StyledHeadLine as={as} {...props}>
			{children}
		</StyledHeadLine>
	)
}

export default Headline
