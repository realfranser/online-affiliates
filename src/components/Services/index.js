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
          <ServicesIcon
            src={process.env.PUBLIC_URL + "/assets/trading212dos.png"}
          />
          <ServicesH2>Trading 212</ServicesH2>
          <ServicesP>Receive 2 free stocks from 8 to 1600$</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <CornerIcon>
            <Podium
              src={process.env.PUBLIC_URL + "/assets/podium/second.png"}
            />
          </CornerIcon>
          <ServicesIcon
            src={process.env.PUBLIC_URL + "/assets/robinhood.png"}
          />
          <ServicesH2>Robin Hood</ServicesH2>
          <ServicesP>Receive 2 free stocks from 8 to 1600$</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <CornerIcon>
            <Podium src={process.env.PUBLIC_URL + "/assets/podium/third.png"} />
          </CornerIcon>
          <ServicesIcon
            src={process.env.PUBLIC_URL + "/assets/plus500dos.png"}
          />
          <ServicesH2>Plus 500</ServicesH2>
          <ServicesP>Receive 2 free stocks from 8 to 1600$</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={process.env.PUBLIC_URL + "/assets/weBull.jpg"} />
          <ServicesH2>Webull</ServicesH2>
          <ServicesP>Receive 3 free stocks from 8 to 1600$</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={process.env.PUBLIC_URL + "/assets/moomoo.png"} />
          <ServicesH2>Moomoo</ServicesH2>
          <ServicesP>Receive 2 free stocks from 8 to 1600$</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={process.env.PUBLIC_URL + "/assets/eToro.png"} />
          <ServicesH2>Etoro</ServicesH2>
          <ServicesP>Receive 2 free stocks from 8 to 1600$</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon
            src={process.env.PUBLIC_URL + "/assets/trading212dos.png"}
          />
          <ServicesH2>Trading 212</ServicesH2>
          <ServicesP>Receive 2 free stocks from 8 to 1600$</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon
            src={process.env.PUBLIC_URL + "/assets/robinhood.png"}
          />
          <ServicesH2>Robin Hood</ServicesH2>
          <ServicesP>Receive 2 free stocks from 8 to 1600$</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon
            src={process.env.PUBLIC_URL + "/assets/plus500dos.png"}
          />
          <ServicesH2>Plus 500</ServicesH2>
          <ServicesP>Receive 2 free stocks from 8 to 1600$</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
