import styled from 'styled-components';

export const ContainerServicos = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 140px;
  padding-bottom: 40px;
  padding-left: 80px;
  padding-right: 80px;
  background-color: #1E1F20;

  h3 {
    font-family: "Anton", sans-serif;
    color: #EFC137;
    font-size: 36px;
    text-align: center;
    letter-spacing: 1px;
    font-weight: lighter;
  }

  @media (max-width: 768px) {
    padding-top: 50px;
    padding-bottom: 30px;
    padding-left: 40px;
    padding-right: 40px;
    width: 100%;
    height: 100%;

    h3 {
      font-size: 24px;
    }
  }

  @media (max-width: 480px) {
    padding-top: 50px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
    height: 100%;

    h3 {
      font-size: 20px;
    }
  }
`;

export const TextoServicos = styled.p`
  font-size: 1.2rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const Title = styled.h2`
  font-family: "Anton", sans-serif;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;
