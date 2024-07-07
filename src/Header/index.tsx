import { HeaderContainer, Nome, TextOverlay, Direita, Esquerda, Icon, Logo } from "./styles";
import logo from '../Imagens/logoAmarelo.png';
import instagram from '../Imagens/instagramCinza.png';
import whats from '../Imagens/whatsCinza.png';
import youtube from '../Imagens/youtubeCinza.png'

const Header = () => {
  return (
    <>
      <HeaderContainer id='inicio'>
        <nav>
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#portfolio">Portfólio</a></li>
            <li><Logo src={logo} alt="Logo" /></li>
            <li><a href="#trabalho">Meus serviços</a></li>
            <li><a href="#sobre">Sobre</a></li>

          </ul>
        </nav>
        <TextOverlay>
          <Esquerda>
            //Descubra o poder do vídeo
          </Esquerda>
          <a href="https://www.instagram.com/filmandoavida_/" target="_blank" rel="noopener noreferrer">
            <Icon src={instagram} alt="Instagram" />
          </a>
          <a href="https://wa.me/5541988266468" target="_blank" rel="noopener noreferrer">
            <Icon src={whats} alt="WhatsApp" />
          </a>
          <a href="https://www.youtube.com/@filmandoavida_/videos" target="_blank" rel="noopener noreferrer">
            <Icon src={youtube} alt="youtube" />
          </a>
          <Nome>
            Filmando a Vida
          </Nome>
          <Direita>
            Editor de Vídeos
          </Direita>
        </TextOverlay>
      </HeaderContainer>
    </>
  );
}

export default Header;
