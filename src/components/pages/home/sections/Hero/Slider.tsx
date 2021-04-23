import { FC, useState, useEffect } from 'react'
import styled from 'styled-components'
import img2 from './img/2.webp'
import img3 from './img/3.webp'

const Wrapper = styled.div`
    position: relative;
    height: 100%;
`

const StyledImg = styled.img`
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    object-fit: fill;
`
const images = [img2, img3]

const Slider: FC = () => {
    const [index, setIndex] = useState<number>(1)
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex(prevCount => {
                if(prevCount === images.length - 1) {
                    return 0
                }
                return prevCount + 1
            })
        }, 3000)
        return () => {
          clearInterval(timer);
        };
      }, []);
    return (
        <Wrapper>
            <StyledImg src={images[index]} />
        </Wrapper>
    )
}

export default Slider