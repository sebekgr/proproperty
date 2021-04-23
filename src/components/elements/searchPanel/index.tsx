import { FC, useState } from 'react'
import styled from 'styled-components'
import { AimOutlined, CalendarOutlined, SearchOutlined } from '@ant-design/icons'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { colors, spacer, font } from '../../theme'
import Headline from '../../shared/headline'
import 'react-day-picker/lib/style.css';

const Wrapper = styled.div`

`
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
`

const CalendarWrapper = styled.div`
    display: flex;
`

const StyledHeadline = styled(Headline)`
    font-family: ${font.fontFamily.bold};
    font-weight: bold;
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
        <Wrapper>
            <ButtonWrapper>
                {buttons}
            </ButtonWrapper>
            <NavigationWrapper>
                <Section>
                    <StyledHeadline as="h4">Location</StyledHeadline>
                    <div>
                        <AimOutlined />
                        <input placeholder="Enter your location..." />
                    </div>
                </Section>
                <Section>
                    <StyledHeadline as="h4">Check in - Check out</StyledHeadline>
                    <CalendarWrapper>
                        <CalendarWrapper>
                            <CalendarOutlined />
                            <DayPickerInput />
                        </CalendarWrapper>
                        <CalendarWrapper>
                            <CalendarOutlined />
                            <DayPickerInput />
                        </CalendarWrapper>
                    </CalendarWrapper>
                </Section>
                <Section>
                    <button><SearchOutlined /></button>
                </Section>
            </NavigationWrapper>
        </Wrapper>
    )
}

export default SearchPanel