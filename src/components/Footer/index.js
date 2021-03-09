import { BorderColor, Twitter } from "@material-ui/icons";
import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  YoutubeIcon,
} from "./FooterElements";
import { animateScroll as scroll } from "react-scroll";

const toggleHome = () => {
  scroll.scrollToTop();
};

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About us </FooterLinkTitle>
              {/*hacer estas secciones tipo a para poder meter links if necessary*/}
              <FooterLink to="/becomeAffiliate">How it works</FooterLink>
              <FooterLink to="/becomeAffiliate">Testimonials</FooterLink>
              <FooterLink to="/becomeAffiliate">Careers</FooterLink>
              <FooterLink to="/becomeAffiliate">Investors</FooterLink>
              <FooterLink to="/becomeAffiliate">Terms of service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About us </FooterLinkTitle>
              <FooterLink to="/becomeAffiliate">How it works</FooterLink>
              <FooterLink to="/becomeAffiliate">Testimonials</FooterLink>
              <FooterLink to="/becomeAffiliate">Careers</FooterLink>
              <FooterLink to="/becomeAffiliate">Investors</FooterLink>
              <FooterLink to="/becomeAffiliate">Terms of service</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About us </FooterLinkTitle>
              <FooterLink to="/becomeAffiliate">How it works</FooterLink>
              <FooterLink to="/becomeAffiliate">Testimonials</FooterLink>
              <FooterLink to="/becomeAffiliate">Careers</FooterLink>
              <FooterLink to="/becomeAffiliate">Investors</FooterLink>
              <FooterLink to="/becomeAffiliate">Terms of service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Business</FooterLinkTitle>
              <FooterLink to="/becomeAffiliate">How it works</FooterLink>
              <FooterLink to="/becomeAffiliate">Testimonials</FooterLink>
              <FooterLink to="/becomeAffiliate">Careers</FooterLink>
              <FooterLink to="/becomeAffiliate">Investors</FooterLink>
              <FooterLink to="/becomeAffiliate">Terms of service</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo onClick={toggleHome} to="/">
              {/*logo OA, implementarlo en clase navbar Elements
               ,hacer que refresque la pagina
               y hacer que se ilumine cuando se pasa por encima de NavLogo*/}
              <img
                src={process.env.PUBLIC_URL + "logosOA/logoFooter.png"}
                onMouseOver={(e) =>
                (e.currentTarget.src =
                  process.env.PUBLIC_URL + "logosOA/logoHoverFooter.png")
                }
                onMouseOut={(e) =>
                (e.currentTarget.src =
                  process.env.PUBLIC_URL + "logosOA/logoFooter.png")
                }
                style={{ height: 50 }}
              />
            </SocialLogo>
            <WebsiteRights>
              OnlineAffiliates Ⓒ {new Date().getFullYear()} All rights reserved
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FacebookIcon />
              </SocialIconLink>
              <SocialIconLink
                href="//www.twitter.com/realfranser"
                target="_blank"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="YouTube">
                <YoutubeIcon />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <TwitterIcon />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
