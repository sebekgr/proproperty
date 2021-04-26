import { FC } from 'react'
import styled from 'styled-components'
import { AimOutlined, CalendarOutlined, SearchOutlined } from '@ant-design/icons'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { colors, spacer, font, size } from '../../../theme'
import Headline from '../../../shared/headline'
import 'react-day-picker/lib/style.css';



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

const Rent: FC = () => {
    return (        
        <>
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
        </>
    )
}

export default Rent