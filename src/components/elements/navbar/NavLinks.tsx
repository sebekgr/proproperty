import { FC } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { Row } from '../../layout'
import { spacer, size, colors } from '../../theme'
import Paragraph from '../../shared/paragraph'


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

const StyledItem = styled.li`
    align-self: center;
    text-align: center;
    display: flex;
`

const StyledLink = styled(NavLink)`
    font-weight: bold;
    color: ${colors.secondary};
    text-decoration: none;
    padding: ${size.xs};
    width: 100%;
    height: 100%;
`

const NavLinks: FC = () => {
    const items = links.map(({link, text}) => {
        return (
            <StyledItem key={link}><StyledLink to={link}>{text}</StyledLink></StyledItem>
        )
    })
    return (
        <Row as="ul" gapDefault={spacer.m} columns={links.length}>
            {items}
        </Row >
    )
}

export default NavLinks