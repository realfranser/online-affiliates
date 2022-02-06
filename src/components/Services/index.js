import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesSubtitle,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  Podium,
  CornerIcon,
} from "./ServicesElements";


const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Available bonus</ServicesH1>
      <ServicesSubtitle>For a limited time only!</ServicesSubtitle>
      <ServicesWrapper>
        <ServicesCard>
          <CornerIcon>
            <Podium src={process.env.PUBLIC_URL + "/assets/podium/first.png"} />
          </CornerIcon>
          <a href='https://www.trading212.com/invite/11PpBIEvFW' style={{ textDecoration: 'none', color: 'inherit' }}>
            <ServicesIcon
              src={process.env.PUBLIC_URL + "/assets/brokers/trading212dos.png"}
            />
            <ServicesH2>Trading 212</ServicesH2>
            <ServicesP>Receive 2 free stocks from 8 to 1600$</ServicesP>
          </a>
        </ServicesCard>
        <ServicesCard>
          <CornerIcon>
            <Podium
              src={process.env.PUBLIC_URL + "/assets/podium/second.png"}
            />
          </CornerIcon>
          <a href='https://www.robinhood.com' style={{ textDecoration: 'none', color: 'inherit' }}>
            <ServicesIcon
              src={process.env.PUBLIC_URL + "/assets/brokers/robinhood.png"}
            />
            <ServicesH2>Robin Hood</ServicesH2>
            <ServicesP>Receive 2 free stocks from 8 to 1600$</ServicesP>
          </a>
        </ServicesCard>
        <ServicesCard>
          <CornerIcon>
            <Podium src={process.env.PUBLIC_URL + "/assets/podium/third.png"} />
          </CornerIcon>
          <a href='https://www.plus500.com/' style={{ textDecoration: 'none', color: 'inherit' }}>
            <ServicesIcon
              src={process.env.PUBLIC_URL + "/assets/brokers/plus500dos.png"}
            />
            <ServicesH2>Plus 500</ServicesH2>
            <ServicesP>Receive 2 free stocks from 8 to 1600$</ServicesP>
          </a>
        </ServicesCard>
        <ServicesCard>
          <a href='https://www.webull.com/' style={{ textDecoration: 'none', color: 'inherit' }}>
            <ServicesIcon src={process.env.PUBLIC_URL + "/assets/brokers/weBull.jpg"} />
            <ServicesH2>Webull</ServicesH2>
            <ServicesP>Receive 3 free stocks from 8 to 1600$</ServicesP>
          </a>
        </ServicesCard>
        <ServicesCard>
          <a href='https://www.moomoo.com/' style={{ textDecoration: 'none', color: 'inherit' }}>
          <ServicesIcon src={process.env.PUBLIC_URL + "/assets/brokers/moomoo.png"} />
          <ServicesH2>Moomoo</ServicesH2>
          <ServicesP>Receive 2 free stocks from 8 to 1600$</ServicesP>
          </a>
        </ServicesCard>
        <ServicesCard>
          <a href='https://www.etoro.com/' style={{ textDecoration: 'none', color: 'inherit' }}>
          <ServicesIcon src={process.env.PUBLIC_URL + "/assets/brokers/eToro.png"} />
          <ServicesH2>Etoro</ServicesH2>
          <ServicesP>Receive 2 free stocks from 8 to 1600$</ServicesP>
          </a>
        </ServicesCard>
        <ServicesCard>
          <a href='https://www.trading212.com/' style={{ textDecoration: 'none', color: 'inherit' }}>
          <ServicesIcon
            src={process.env.PUBLIC_URL + "/assets/brokers/trading212dos.png"}
          />
          <ServicesH2>Trading 212</ServicesH2>
          <ServicesP>Receive 2 free stocks from 8 to 1600$</ServicesP>
          </a>
        </ServicesCard>
        <ServicesCard>
          <a href='https://www.robinhood.com/' style={{ textDecoration: 'none', color: 'inherit' }}>
          <ServicesIcon
            src={process.env.PUBLIC_URL + "/assets/brokers/robinhood.png"}
          />
          <ServicesH2>Robin Hood</ServicesH2>
          <ServicesP>Receive 2 free stocks from 8 to 1600$</ServicesP>
          </a>
        </ServicesCard>
        <ServicesCard>
          <a href='https://www.plus500.com/' style={{ textDecoration: 'none', color: 'inherit' }}>
          <ServicesIcon
            src={process.env.PUBLIC_URL + "/assets/brokers/plus500dos.png"}
          />
          <ServicesH2>Plus 500</ServicesH2>
          <ServicesP>Receive 2 free stocks from 8 to 1600$</ServicesP>
          </a>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer >
  );
};

export default Services;
