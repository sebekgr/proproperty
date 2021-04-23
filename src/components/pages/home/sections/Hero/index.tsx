import { FC } from 'react'
import styled from 'styled-components'
import { FullWidthSection, Row } from '../../../../layout'
import { font, colors } from '../../../../theme'
import Slider from './Slider'


const StyledHeadLine = styled.h1`
    font-family: ${font.fontFamily.bold};
    font-size: 6rem;
    margin-top: 10rem;
    margin-bottom: 10rem;
`

const StyledWrapper = styled(FullWidthSection)`
    background: linear-gradient(90deg, ${colors.primaryLight} 50%, ${colors.white} 50%);
    gap: 0;
`


const Hero: FC = () => {
    return (
        <StyledWrapper>
            <Row ds={4} de={4}>
            <StyledHeadLine as="h1">
                Home rent<br />
                renovations,<br />
                made easy!
            </StyledHeadLine>
            </Row>
            <Row ds={8} de={5}>
            <Slider />
            </Row>
        </StyledWrapper>
    )
}

export default Hero