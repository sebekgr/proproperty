import { Story } from '@storybook/react'
import Input from '../input'

export default {
	title: 'Shared/Input',
}
const Template: Story<any> = () => <Input />

export const Primary = Template.bind({})

Primary.args = {}
