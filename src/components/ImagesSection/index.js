import React, { useState, useEffect } from "react";
import {
  ImageBtnWrapper,
  ImageContainer,
  ImageContent,
  ImageH1,
  ImageH2,
  ImageP,
  ElementoInvisible,
  WithoutCodeButton,
  MeterCodigo,
  CoverImage,
  NavLinks,
} from "./ImagesElements";
import { animateScroll as scroll } from "react-scroll";
import Services from "../Services";
import { FaSignInAlt } from "react-icons/fa";
import cover_image from './images/ecomerce.png';
import { CenterFocusStrong, Description } from "@material-ui/icons";

const ImagesElements = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <ImageContainer>
      <ImageContent>
        {/*Por ejemplo*/}
        <ImageH1>Welcome to</ImageH1>
        <ImageH2>Online Affiliates</ImageH2>
        &nbsp;
        {/*<ImageP>Texto de prueba</ImageP>
        The search bar will become useful in the 2.x
        <MeterCodigo />*/}
        <ImageBtnWrapper>
          <WithoutCodeButton
            to="services"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={10}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Check available bonus{" "}
            {/*{hover ? <ArrowHovered /> : <ArrowUnhovered />}*/}
          </WithoutCodeButton>
        </ImageBtnWrapper>
        <div style={{ marginTop: 75 }}>
          <h3 style={{ width: 550, textAlign: "center", fontWeight: "normal" }}>Check our services and available bonus, click on the apps more
          suited for you, register using our affiliate link and ...
          <br />
            <h4 style={{ fontWeight: "bold", marginTop: 15 }}>
              Start making money with free stocks!
            </h4>
          </h3>
        </div>
      </ImageContent>
    </ImageContainer>
  );
};

export default ImagesElements;