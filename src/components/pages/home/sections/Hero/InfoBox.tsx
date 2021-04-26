import { FC } from 'react'
import styled from 'styled-components'
import HomeFilled from '@ant-design/icons/HomeFilled'
import { colors, spacer, headlineSize } from '../../../../theme'
import Paragraph from '../../../../shared/paragraph'

const text = 'You share your ideas and we handle the rest. We do it all - from home rent to event services, foods and other requirements. Sit back and relax, we take care of it!'

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    background-color: ${colors.primaryLight};
    height: 100%;
    padding: ${spacer.m};
    margin-bottom: ${spacer.xl};
    text-align: left;
`

const DivIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    padding: ${spacer.xs};
    background-color: ${colors.white};
    font-size: ${headlineSize.h2};
    width: ${spacer.xl};
    height: ${spacer.xl};

`

const InfoBox: FC = () => {
    return (
        <StyledDiv>
            <DivIcon>
                <HomeFilled />
            </DivIcon>
            <Paragraph p2>{text}</Paragraph>
        </StyledDiv>
    )
}

export default InfoBox