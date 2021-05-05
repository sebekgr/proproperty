import { FC } from 'react'
import styled from 'styled-components'
import { MaxWidthSection, Row } from '../../layout'
import NavBar from '../navbar'
import Logo from './Logo'
import LoginPanel from './LoginPanel'
import { spacer } from '../../theme'


const StyledHeader = styled(MaxWidthSection)`
	padding: ${spacer.s} 0 ${spacer.s} 0;
`

const Header: FC = () => {
	return (
		<StyledHeader as="header">
			<Row ds={1} de={3}>
				<Logo />
			</Row>
			<Row ds={4} de={4}>
				<NavBar />
			</Row>
			<Row ds={8} de={3}>
				<LoginPanel />
			</Row>			
		</StyledHeader>
	)
}

export default Header
