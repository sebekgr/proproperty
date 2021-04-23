import { FC } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {baseStyle, secondaryStyle} from '../../shared/button'
import { font } from '../../theme'


const StyledPanel = styled.div`
    display: flex;
    flex-direction: row-reverse;
`
const StyledLink = styled(Link)`
    ${baseStyle}
    ${secondaryStyle}
    font-family: ${font.fontFamily.bold};
`

const LoginPanel: FC = () => {
    return (
        <StyledPanel>
            <StyledLink to="/signup">Sign Up</StyledLink> 
        </StyledPanel>
    )
}

export default LoginPanel