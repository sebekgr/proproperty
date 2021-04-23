import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { size, colors } from '../../theme'


const links = [
    {
        link: '/services',
        text: 'Services'
    },
    {
        link: '/how-it-works',
        text: 'How it works'
    },
    {
        link: '/co-working-space',
        text: 'Co-working Space'
    },
    {
        link: '/reviews',
        text: 'Reviews'
    },
    {
        link: '/contact',
        text: 'Contact'
    }
]


const StyledLink = styled(NavLink)`
    font-weight: bold;
    font-size: ${size.xs};
    color: ${colors.secondary};
`

const Styledlist = styled.ul`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
`
const NavLinks: FC = () => {
    const items = links.map(({link, text}) => {
        return (
            <li key={link}><StyledLink to={link}>{text}</StyledLink></li>
        )
    })
    return (
        <Styledlist>
            {items}
        </Styledlist >
    )
}

export default NavLinks