import { FC, useState } from 'react'
import styled from 'styled-components'
import { AimOutlined, CalendarOutlined, SearchOutlined } from '@ant-design/icons'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { colors, spacer, font, size } from '../../theme'
import Headline from '../../shared/headline'
import 'react-day-picker/lib/style.css';

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

const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const CalendarWrapper = styled.div`
    display: flex;
    align-items: center;
`

const StyledHeadline = styled(Headline)`
    font-family: ${font.fontFamily.bold};
    font-weight: bold;
`

const StyledInput = styled.input`
    border:0;
    padding: ${spacer.xs};
    margin: ${spacer.xs};   
`

const StyledSearchButton = styled.button`
    display:flex;
    border-radius: ${spacer.xs};
    padding: ${spacer.s};
    color: ${colors.white};
    background-color: ${colors.secondary};
    font-size: ${size.l};
`

const SearchPanel: FC = () => {
    const [activeButton, setActiveButton] = useState<string>('Rent Home')
    const buttons = ['Rent Home', 'Rent Workspace']
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
                <Section>
                    <StyledHeadline as="h4">Location</StyledHeadline>
                    <div>
                        <AimOutlined />
                        <StyledInput placeholder="Enter your location..." />
                    </div>
                </Section>
                <Section>
                    <StyledHeadline as="h4">Check in - Check out</StyledHeadline>
                    <CalendarWrapper>
                        <CalendarWrapper>
                            <CalendarOutlined />
                            <DayPickerInput placeholder="Set date"/>
                        </CalendarWrapper>
                        <CalendarWrapper>
                            <CalendarOutlined />
                            <DayPickerInput placeholder="Set date"/>
                        </CalendarWrapper>
                    </CalendarWrapper>
                </Section>
                <Section>
                    <StyledSearchButton><SearchOutlined /></StyledSearchButton>
                </Section>
            </NavigationWrapper>
        </div>
    )
}

export default SearchPanel