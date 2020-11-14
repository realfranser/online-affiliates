import React from 'react'
import {
    Column1,
    Column2,
    ImgWrap,
    InfoContainer,
    InfoWrapper,
    InfoRow,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    Img
} from './InfoElements'
import { Button } from 'react-scroll';

const InfoSection = () => {
    return (
        <InfoContainer>
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                        <TextWrapper>
                            <TopLine>TopLine</TopLine>
                            <Heading>Heading</Heading>
                            <Subtitle>Subtitle</Subtitle>
                            <BtnWrap>
                                <Button to='home' />
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img />
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    )
}

export default InfoSection
