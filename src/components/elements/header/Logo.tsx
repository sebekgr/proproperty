import { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { font, headlineSize, colors } from '../../theme'

const StyledLink = styled(Link)`
    font-family: ${font.fontFamily.bold};
    font-size: ${headlineSize.h2};
    text-transform: uppercase;
    align-self: center;
    color: ${colors.secondary};
`


const Logo: FC = () => {
    return (
        <StyledLink to="/">Proproperty</StyledLink>
    )
}

export default Logo