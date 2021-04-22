import { Story } from '@storybook/react'
import Headline from '../headline'

export default {
	title: 'Shared/Headline',
}
const Template: Story<any> = () => (
    <div>
        <Headline>Headline Default</Headline>
        <Headline as="h1">Headline h1</Headline>
        <Headline as="h2">Headline h2</Headline>
        <Headline as="h3">Headline h3</Headline>
        <Headline as="h4">Headline h4</Headline>
    </div>
)

export const Primary = Template.bind({})

Primary.args = {}
