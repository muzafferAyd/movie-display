import React from "react";
import { Main, Copyright, SocialMedia, SocialIcon } from "./Footer.style";
import { ReactComponent as MiniLogo } from '../../assets/appcent-logo.svg';

const Footer = () => {
  return (
    <Main>
      <SocialMedia>
        <SocialIcon>
          <i className="fa fa-facebook fa-2x"></i>
        </SocialIcon>
        <SocialIcon>
          <i className="fa fa-instagram fa-2x"></i>
        </SocialIcon>
        <SocialIcon>
          <i className="fa fa-whatsapp fa-2x"></i>
        </SocialIcon>
      </SocialMedia>
      <Copyright>
        <MiniLogo/>
        <p> &copy;2021 by Muzaffer AYDOĞDU  </p>
      </Copyright>
    </Main>
  );
};

export default Footer;