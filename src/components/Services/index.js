import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer>
      <ServicesH1>Our services</ServicesH1>
      <ServicesWrapper>
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
