import React from 'react';
import { ContainerFooter, TextoFooter, SocialLinks, ImgSocialLinks, ImgLogo, SocialLink } from './styles';
import logo from '../Imagens/logo.png';
import whatsapp from '../Imagens/whatsCinza.png';
import instagram from '../Imagens/instagramCinza.png';
import youtube from '../Imagens/youtubeCinza.png';

const Footer: React.FC = () => {
  return (
    <ContainerFooter id="Footer">
      <div>
        <ImgLogo src={logo} alt="Logo" />
        <TextoFooter>+55 41 98826-6468   |   CONTATO_FAV@OUTLOOK.COM</TextoFooter>
        <TextoFooter>Curitiba - Paraná - Brasil</TextoFooter>
      </div>
      <SocialLinks>
        <SocialLink href="https://wa.me/5541988266468"><ImgSocialLinks src={whatsapp} /></SocialLink>
        <SocialLink href="https://instagram.com/filmandoavida_"><ImgSocialLinks src={instagram} /></SocialLink>
        <SocialLink href="https://www.youtube.com/@filmandoavida_/videos"><ImgSocialLinks src={youtube} /></SocialLink>
      </SocialLinks>
    </ContainerFooter>
  );
};

export default Footer;