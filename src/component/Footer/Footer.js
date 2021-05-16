import React from "react";
import { Main, Copyright, SocialMedia, SocialIcon } from "./Footer.style";

const Footer = () => {
  return (
    <Main>
      <SocialMedia>
        <SocialIcon>
          <i className="fa fa-twitter fa-2x"></i>
        </SocialIcon>
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
        <p> @CopyRights by Tmdb Movies </p>
      </Copyright>
    </Main>
  );
};

export default Footer;