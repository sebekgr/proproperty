import { FC } from 'react'
import styled from 'styled-components'
import NavLinks from './NavLinks'

const StyledNav = styled.nav`
	align-self: center;
`

const NavBar: FC = () => {
	return (
		<StyledNav>
			<NavLinks />
		</StyledNav>
	)
}

export default NavBar
