import { Story } from '@storybook/react'
import Paragraph from '../paragraph'

export default {
	title: 'Shared/Paragraph',
}
const Template: Story<any> = () => (
    <div>
        <Paragraph>Paragraph Default</Paragraph>
        <Paragraph p1>Paragraph p1</Paragraph>
        <Paragraph p2>Paragraph p2</Paragraph>
        <Paragraph p3>Paragraph p3</Paragraph>
        <Paragraph p4>Paragraph p4</Paragraph>
    </div>
)

export const Primary = Template.bind({})

Primary.args = {}
