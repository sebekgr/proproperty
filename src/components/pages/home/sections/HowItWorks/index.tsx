import { FC } from 'react'
import styled from 'styled-components'
import { FullWidthSection, MaxWidthSection, Row } from '../../../../layout'
import { colors } from '../../../../theme'

const Wrapper = styled(FullWidthSection)`
    background-color: ${colors.primaryLight};
`

const HowItWorks: FC = () => {
    return (
        <Wrapper>
            <Row ds={3} de={9} style={{ border: '1px solid red'}}>
                content
                content
                content
            </Row>
        </Wrapper>
    )
}

export default HowItWorks