import styled from 'styled-components';
import backgroundImage from '../Imagens/fundo.jpg';

export const HeaderContainer = styled.div`
  top: 0;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;  /* Evita elementos que se expandem fora do contêiner */

  a {
    cursor: pointer;
  }

  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 1000;
    background-color: #1E1F20;
    font-size: 14px;
    overflow: hidden;
  }

  nav ul {
    list-style: none;
    margin: 0;
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  nav ul li {
    margin: 0 15px;
  }

  nav ul li a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
  }

  nav ul li a:hover {
    color: #FFD700;
  }

  @media (max-width: 768px) {
    nav {
      flex-direction: column;  /* Ajusta a navegação para dispositivos menores */
    }

    nav ul {
      flex-direction: column;  /* Ajusta a navegação para dispositivos menores */
      padding: 10px;  /* Ajusta o padding para dispositivos menores */
    }

    nav ul li {
      margin: 5px 0;  /* Ajusta a margem para dispositivos menores */
    }

    height: auto;  /* Ajusta a altura para dispositivos menores */
  }

  @media (max-width: 480px) {
    nav ul li a {
      font-size: 12px;  /* Ajusta o tamanho da fonte para dispositivos menores */
    }

    height: auto;  /* Ajusta a altura para dispositivos menores */
  }
`;

export const TextOverlay = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 20px;
  border-radius: 10px;

  @media (max-width: 768px) {
    right: 10px;
    bottom: 10px;
    padding: 15px;
  }

  @media (max-width: 480px) {
    right: 5px;
    bottom: 5px;
    padding: 10px;
  }
`;

export const Nome = styled.p`
  font-size: 62px;
  margin: 0;
  font-family: "Anton", sans-serif;
  color: #1E1F20;

  @media (max-width: 768px) {
    font-size: 48px;
  }

  @media (max-width: 480px) {
    font-size: 36px;
  }
`;

export const Direita = styled.p`
  text-align: right;
  font-family: "Anton", sans-serif;
  font-size: 18px;
  color: #1E1F20;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Esquerda = styled.p`
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

export const Icon = styled.img`
  width: 20px;
  height: auto;
  margin: 0 5px;

  @media (max-width: 768px) {
    width: 18px;
  }

  @media (max-width: 480px) {
    width: 16px;
  }
`;

export const Logo = styled.img`
  width: 40px;

  @media (max-width: 768px) {
    width: 35px;
  }

  @media (max-width: 480px) {
    width: 30px;
  }
`;
