import { Story } from '@storybook/react'
import Button from '../button'

export default {
	title: 'Shared/Button',
}
const Template: Story<any> = () => <Button>sample text</Button>

export const Primary = Template.bind({})

Primary.args = {}
