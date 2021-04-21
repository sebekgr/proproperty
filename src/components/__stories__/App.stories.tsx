import { Story } from '@storybook/react'
import App from '../App'

export default {
	title: 'Main/App',
}
const Template: Story<any> = () => <App />

export const Primary = Template.bind({})

Primary.args = {}
