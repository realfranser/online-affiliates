import React, { useState } from 'react';
import { Button } from '../ButtonElements';
import {
    ArrowForward,
    ArrowRight,
    ImageBtnWrapper,
    ImageContainer,
    ImageContent,
    ImageH1,
    ImageP
} from './ImagesElements';

const ImagesElements = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <ImageContainer>
            <ImageContent>
                {/*Por ejemplo*/}
                <ImageH1>Welcome to online affiliates</ImageH1>
                <ImageP>Texto de prueba</ImageP>
                <ImageBtnWrapper>
                    <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover}>
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </ImageBtnWrapper>
            </ImageContent>
        </ImageContainer>
    )
}

export default ImagesElements