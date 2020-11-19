import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import { coloresOA } from "../../../package.json";

export const ImageContainer = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
`;

export const ImageContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageH1 = styled.h1`
  color: black;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 760px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480) {
    font-size: 32px;
  }
`;

export const ImageP = styled.p`
  margin-top: 24px;
  color: black;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 760px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480) {
    font-size: 18px;
  }
`;

export const ImageBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

/*Color dolar
color: '#85bb65'*/

/*Color gris
color: '#c3c3c3'*/
