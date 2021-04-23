import { FC } from 'react'
import { Link } from 'react-router-dom'


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



const NavLinks: FC = () => {
    const items = links.map(({link, text}) => {
        return (
            <li><Link to={link}>{text}</Link></li>
        )
    })
    return (
        <ul>
            {items}
        </ul>
    )
}

export default NavLinks