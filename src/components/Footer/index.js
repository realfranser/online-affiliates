import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About us </FooterLinkTitle>
              {/*hacer estas secciones tipo a para poder meter links if necessary*/}
              <FooterLink to="/becomeAffiliate">How ir works</FooterLink>
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
              <FooterLink to="/becomeAffiliate">How ir works</FooterLink>
              <FooterLink to="/becomeAffiliate">Testimonials</FooterLink>
              <FooterLink to="/becomeAffiliate">Careers</FooterLink>
              <FooterLink to="/becomeAffiliate">Investors</FooterLink>
              <FooterLink to="/becomeAffiliate">Terms of service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About us </FooterLinkTitle>
              <FooterLink to="/becomeAffiliate">How ir works</FooterLink>
              <FooterLink to="/becomeAffiliate">Testimonials</FooterLink>
              <FooterLink to="/becomeAffiliate">Careers</FooterLink>
              <FooterLink to="/becomeAffiliate">Investors</FooterLink>
              <FooterLink to="/becomeAffiliate">Terms of service</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
