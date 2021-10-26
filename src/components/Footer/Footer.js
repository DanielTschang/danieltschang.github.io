import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call me</LinkTitle>
          <LinkItem href="tel:+886-968-623-023"> +886-968-623-023</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Mail me</LinkTitle>
          <LinkItem href="mailto:danchang11@gapp.nthu.edu.tw">danchang11@gapp.nthu.edu.tw</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialContainer>
        <SocialIcons href="https://github.com/danieltschang">
          <AiFillGithub size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/jong-wen-daniel-tschang-798430192/">
          <AiFillLinkedin size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://instagram.com/danchang11">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
      </SocialContainer>
    </FooterWrapper>
  );
};

export default Footer;
