import { FC } from 'react'
import styled from 'styled-components'
import { Grid, FullWidthSection, Row, MaxWidthSection } from '../'
import { GlobalStyle } from '../../theme'

const StyledGrid = styled(Grid)`
    border: 1px solid black;
    background-color: rgba(0,101,0,0.38);
    text-align: center;
`



const Filler = styled.div`
    background-color: rgba(255,0,156,0.38);
    width: 100%;
    height: 100%;
    padding: 2rem;
`

const cols = (length: number): Array<number> => Array.from({length}, (_, i) => i + 1)

const StyledFullWidthSection = styled(FullWidthSection)`
    background-color: rgba(255,0,0,0.38);
`

const StyledMaxWidthSection = styled(MaxWidthSection)`
    background-color: pink;
`

const StyledRow = styled(Row)`
    background-color: black;
    color: white;
`

type GridFixture = {
    colsNo: number
}

const GridFixture: FC<GridFixture> = ({colsNo}) => {
    return (
        <>  
        <GlobalStyle />        
        <StyledGrid>
            {cols(colsNo).map((col) => (
                <Filler>
                    {col}
                </Filler>
            ))}
            <StyledFullWidthSection>
                <Row ds={1} de={14}>
                    This is a FullWidthSection This is a FullWidthSection This is a FullWidthSection This is a FullWidthSection This is a FullWidthSection This is a FullWidthSection This is a FullWidthSection This is a FullWidthSection This is a FullWidthSection This is a FullWidthSection This is a FullWidthSection This is a FullWidthSection This is a FullWidthSection This is a FullWidthSection 
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </Row>
            </StyledFullWidthSection>
            <StyledMaxWidthSection>
                <Row>
                    This is a MaxWidthSection This is a MaxWidthSection This is a MaxWidthSection This is a MaxWidthSection This is a MaxWidthSection This is a MaxWidthSection This is a MaxWidthSection This is a MaxWidthSection This is a MaxWidthSection This is a MaxWidthSection This is a MaxWidthSection This is a MaxWidthSection This is a MaxWidthSection This is a MaxWidthSection This is a MaxWidthSection 
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </Row>
            </StyledMaxWidthSection>
            <StyledMaxWidthSection>
                <StyledRow ds={1} de={3} > this is span Row 1/3 </StyledRow>
            </StyledMaxWidthSection>
            <StyledMaxWidthSection>
                <StyledRow ds={4} de={3} > this is span Row 3/6 </StyledRow>
            </StyledMaxWidthSection>
        </StyledGrid>
    </>
    )
}

export default GridFixture