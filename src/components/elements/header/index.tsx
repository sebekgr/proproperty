import { FC } from 'react'
import styled from 'styled-components'
import { MaxWidthSection } from '../../layout'

const StyledHeader = styled(MaxWidthSection)`
	border: 2px solid red;
	width: 100%;
`


const Header: FC = () => {
	return (
		<StyledHeader as="header">
			header
		</StyledHeader>
	)
}

export default Header
