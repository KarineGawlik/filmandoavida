import React from 'react';
import { ContainerFooter, TextoFooter, SocialLinks, ImgSocialLinks, ImgLogo } from './styles';
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
        <a href="https://wa.me/5541988266468" target="_blank" rel="noopener noreferrer"><ImgSocialLinks src={whatsapp} /></a>
        <a href="https://instagram.com/filmandoavida_" target="_blank" rel="noopener noreferrer"><ImgSocialLinks src={instagram} /></a>
        <a href="https://www.youtube.com/@filmandoavida_/videos" target="_blank" rel="noopener noreferrer"><ImgSocialLinks src={youtube}/></a>
      </SocialLinks>
    </ContainerFooter>
  );
};

export default Footer;
