import { FC } from 'react'
import styled from 'styled-components'
import { MaxWidthSection } from '../../layout'
import NavBar from '../navbar'
import Logo from './Logo'
import LoginPanel from './LoginPanel'
import { spacer } from '../../theme'

const StyledHeader = styled(MaxWidthSection)`
	margin-top: ${spacer.m};
	margin-bottom: ${spacer.m};
	grid-template-columns: .5fr .7fr .5fr;
`


const Header: FC = () => {
	return (
		<StyledHeader as="header">
			<Logo />
			<NavBar />
			<LoginPanel />
		</StyledHeader>
	)
}

export default Header
