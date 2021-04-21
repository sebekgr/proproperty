import { FC } from 'react'
import styled, { css } from 'styled-components'
import { size, font } from '../../theme'

const map = {
    p1: size.l,
    p2: size.m,
    p3: size.s,
    p4: size.xs
}

type Props = {
    p1?: boolean
    p2?: boolean
    p3?: boolean
    p4?: boolean
}


const Paragraph: FC<Props> = styled.p<Props>`
    font-family: ${font.fontFamily.default};
    font-size: ${map.p2};
    font-size: ${({ p1 }) => p1 && map.p1};
    font-size: ${({ p2 }) => p2 && map.p2};
    font-size: ${({ p4 }) => p4 && map.p4};
    ${({ p3 }) => p3 && css`
        font-size: ${map.p3};
        font-family: ${font.fontFamily.bold};
        font-weight: bold;
    `}
`
export default Paragraph