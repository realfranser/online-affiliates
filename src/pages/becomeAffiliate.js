import React, { useState } from "react";
import BecomeAffiliate from "../components/BecomeAffiliate";
import ScrollToTop from "../components/ScrollToTop";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const BecomeAffiliatePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/*Es opcional el poner ahi el navbar pero se puede crear navbar solo con logo centrado que lleve a la raiz*/}
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <ScrollToTop />
      <BecomeAffiliate />
    </>
  );
};

export default BecomeAffiliatePage;
