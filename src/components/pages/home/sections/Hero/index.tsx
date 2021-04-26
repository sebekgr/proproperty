import { FC } from 'react'
import styled from 'styled-components'
import { FullWidthSection, Row, MaxWidthSection } from '../../../../layout'
import { colors, spacer, headlineSize, font } from '../../../../theme'
import Slider from './Slider'
import InfoBox from './InfoBox'
import SearchPanel from '../../../../elements/searchPanel'
import Headline from '../../../../shared/headline'


const StyledHeadLine = styled.h1`
    font-family: ${font.fontFamily.bold};
    font-size: 6rem;
    margin-top: 10rem;
    margin-bottom: 10rem;
`

const StyledWrapper = styled(FullWidthSection)`
    position: relative;
    background: linear-gradient(90deg, ${colors.primaryLight} 50%, ${colors.white} 50%);
    gap: 0;
    margin-bottom: ${spacer.xl};
`

const StyledSearchPannelWrapper = styled.div`
    position: absolute;
    left: 25%;
    bottom: -10%;
`

const StyledRow = styled(Row)`
    text-align: center;
    margin-top: ${spacer.xl};
`

const StyledHeadline = styled(Headline)`
    font-family: ${font.fontFamily.bold};
    font-weight: bold;
`

const StyledMaxWidthSection = styled(MaxWidthSection)`
    margin-top: ${spacer.xl};
`

const StyledList = styled.ul`
    text-align: left;
    font-family: ${font.fontFamily.bold};
    font-size: ${headlineSize.h2};
    li{
        margin-bottom: ${spacer.xs};
        color: ${colors.textGrey};
        &:first-child {
            color: ${colors.secondary};
            margin-bottom: ${spacer.s};
        }
    }
`

const texts = [
    'We Handle Everything',
    'For House Party',
    'For Short-term Meeting',
    'For Co-Working Space',
    'For Indoor Sports'
]


const TextList: FC = () => {
    return (
        <StyledList>
            {texts.map(text => {
                return (
                    <li key={text}>{text}</li>
                )
            })}
        </StyledList>
    )
}

const Hero: FC = () => {
    return (
        <>
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
            <StyledSearchPannelWrapper>
                <SearchPanel />
            </StyledSearchPannelWrapper>
        </StyledWrapper>
            <MaxWidthSection>
                <StyledRow ds={3} de={9}>
                    <StyledHeadline as="h4">We've reimagined the home rent<br /> renovation experiance.</StyledHeadline>
                    <StyledMaxWidthSection>
                        <Row ds={1} de={6}>
                            <TextList />
                        </Row>
                        <Row ds={7} de={4}>
                            <InfoBox />
                        </Row>
                    </StyledMaxWidthSection>
                </StyledRow>
            </MaxWidthSection>
        </>
    )
}

export default Hero