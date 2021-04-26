import { FC, useState } from 'react'
import styled from 'styled-components'
import { colors, spacer  } from '../../theme'
import Rent from './rent'
import Sell from './sell'

type Props = {
    active: boolean
}

const StyledButton = styled.button<Props>`
    font-weight: bold;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: ${spacer.s};
    ${({ active }) => `
        color: ${active ? colors.white : colors.secondary};
        background-color: ${active ? colors.buttonSecondary : colors.white};
    `}
    flex: 1;
`

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    max-width: 300px;
    margin: 0 auto;
`

const NavigationWrapper = styled.div`
    display: flex;
    background-color: ${colors.white};
    box-shadow: 0px 10px 13px -7px ${colors.grey}, 5px 5px 15px 5px rgba(0,0,0,0);
    padding: ${spacer.s} ${spacer.xl};
`



const SearchPanel: FC = () => {
    const [activeButton, setActiveButton] = useState<string>('Rent')
    const buttons = ['Rent', 'Sell']
        .map(button => {
        return (
            <StyledButton 
                key={button}
                onClick={() => setActiveButton(button)}
                active={activeButton === button}
            >
                {button}
            </StyledButton>
        )
    })
    return (
        <div>
            <ButtonWrapper>
                {buttons}
            </ButtonWrapper>
            <NavigationWrapper>
                {activeButton === 'Rent' ? <Rent /> : <Sell />}
            </NavigationWrapper>
        </div>
    )
}

export default SearchPanel