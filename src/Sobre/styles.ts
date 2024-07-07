import styled from 'styled-components';
import backgroundImage from '../Imagens/sobre2semFundo.png';

export const ContainerSobre = styled.div`
  padding: 50px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background-color: #D0D4CC;
`;

export const TextoSobre = styled.p`
  font-size: 48px;
  line-height: 1.6;
  color: #1E1F20;
  font-family: "Anton", sans-serif;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  height: 120%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${backgroundImage});
    background-attachment: fixed;
    background-size: contain;
    background-position: right center;
    z-index: 1;
    pointer-events: none;
    background-repeat: no-repeat;
  }
`;

export const TextContainer = styled.div`
  flex: 1;
  z-index: 2;
  position: relative;
`;
