import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 1300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #0100606;

  @media screen and (max-width: 1000px) {
    height: 1800px;
  }
  @media screen and (max-width: 768px) {
    height: 3000px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.04);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  user-select: none;
`;

export const ServicesIcon = styled.img`
  height: 190px;
  width: 190px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #000;
  margin-bottom: 64px;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const CornerIcon = styled.div`
  position: relative;
`;

export const Podium = styled.img`
  height: 30px;
  width: 30px;
  position: absolute;
  top: -30px;
  right: -161px;
`;
