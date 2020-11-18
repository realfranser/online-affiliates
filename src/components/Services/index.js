import React from "react";

//import Icon1 from "../../../public/assets/trading212dos.png";
//import Icon2 from "../../../public/assets/trading212dos.png";
//import Icon3 from "../../../public/assets/trading212dos.png";

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
          <ServicesIcon /*src={Icon1}*/ />
          <ServicesH2>Reduce expenses</ServicesH2>
          <ServicesP>We help reduce our expences</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon /*src={Icon2}*/ />
          <ServicesP>Reduce expenses</ServicesP>
          <ServicesH2>We help reduce our expences</ServicesH2>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon /*src={Icon3}*/ />
          <ServicesH2>Reduce expenses</ServicesH2>
          <ServicesP>We help reduce our expences</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
