import { FC } from 'react'
import styled from 'styled-components'
import { MaxWidthSection } from '../../layout'
import NavBar from '../navbar'

const StyledHeader = styled(MaxWidthSection)`
	width: 100%;
	grid-template-columns: none;
`


const Header: FC = () => {
	return (
		<StyledHeader as="header">
			<NavBar />
		</StyledHeader>
	)
}

export default Header
