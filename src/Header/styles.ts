import styled from 'styled-components';
import backgroundImage from '../Imagens/fundo.jpg';

export const HeaderContainer = styled.div`
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

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
    font-size: 12px;
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

`;

export const TextOverlay = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 20px;
  border-radius: 10px;
`;

export const Nome = styled.p`
  font-size: 62px;
  margin: 0;
  font-family: "Anton", sans-serif;
  color: #1E1F20;
`;

export const Direita = styled.p`
  text-align: right;
  font-family: "Anton", sans-serif;
  font-size: 18px;
  color: #1E1F20;
`;

export const Esquerda = styled.p`
  font-size: 14px;
`;

export const Icon = styled.img`
  width: 20px;
  height: auto;
  margin: 0 5px;
`;

export const Logo = styled.img`
  width: 40px;
`