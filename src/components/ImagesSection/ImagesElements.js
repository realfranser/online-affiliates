import styled from "styled-components";
import { MdKeyboardArrowDown, MdArrowDownward } from "react-icons/md";
import { coloresOA } from "../../../package.json";
import { Button } from "../ButtonElements";
import { SearchBar } from "../SearchBar";
import { Link as LinkS } from "react-scroll";

export const ImageContainer = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 1000px;
  position: relative;
  z-index: 1;
  margin-top: -115px;
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

  @media screen and (max-width: 800px) {
    font-size: 38px;
  }
  @media screen and (max-width: 480) {
    font-size: 32px;
  }
`;

export const ImageH2 = styled.h2`
  color: black;
  font-size: 55px;
  text-align: center;

  @media screen and (max-width: 800px) {
    font-size: 43px;
  }
  @media screen and (max-width: 480) {
    font-size: 40px;
  }
`;

export const ImageP = styled.p`
  margin-top: 24px;
  color: black;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 800px) {
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

export const ArrowHovered = styled(MdArrowDownward)`
  margin-left: 8px;
  margin-top: 2px;
  font-size: 24px;
`;

export const ArrowUnhovered = styled(MdKeyboardArrowDown)`
  margin-left: 8px;
  margin-top: 5px;
  font-size: 20px;
`;

export const WithoutCodeButton = styled(Button)`
  background-color: #01bf71;
  color: #000;
  font-weight: 600;
  font-size: 18px;

  @media screen and (max-width: 800px) {
    font-size: 17px;
  }
  @media screen and (max-width: 480) {
    font-size: 16px;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #fff;
    transform: scale(1.04);
  }
`;

export const NavLinks = styled(LinkS)`
  height: 240px;
  width: 380px;
  margin-top: 550px;
  align-items: center;
`;
export const CoverImage = styled.img`
  object-fit: cover;
  height: 240px;
  width: 380px;
  align-items: center;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.11);
  }
`;
export const MeterCodigo = styled(SearchBar)``;

export const SubText = styled.h3`
  width: 550px;
  text-align: center;
  font-weight: normal;

  @media screen and (max-width: 800px) {
    font-size: 21px;
    widht: 380px;
  }

  @media screen and (max-width: 480px) {
    font-size: 17px;
    width: 320px;
`
