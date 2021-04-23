import { FC } from 'react'
import styled from 'styled-components'
import { MaxWidthSection } from '../../layout'
import NavBar from '../navbar'

const StyledHeader = styled(MaxWidthSection)`
	border: 2px solid red;
	width: 100%;
`


const Header: FC = () => {
	return (
		<StyledHeader as="header">
			<NavBar />
		</StyledHeader>
	)
}

export default Header
