import { Story } from '@storybook/react'
import styled from 'styled-components'
import GridFixture from '../__fixture__/grid'



const Wrapper = styled.div<{width: string}>`
    ${({ width }) => `
        width: ${width};
    `}
    margin: 2rem auto 2rem auto;
`
const StyledHeader = styled.div`
    width: 100%;
    text-align: center;
`


export default {
	title: 'Grid/Grid',
}
const Template: Story<any> = () => (
   <>
    <Wrapper width="1400px">
        <StyledHeader>14 cols</StyledHeader>
        <GridFixture colsNo={14}/>
    </Wrapper>
   </>
)

export const Primary = Template.bind({})

Primary.args = {}
