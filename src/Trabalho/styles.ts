import styled from 'styled-components';

export const ContainerTrabalho = styled.div`
  background-color: #D0D4CC;
  width: 100%;
`;

export const TextoTrabalho = styled.div`
  font-size: 14px;
  width: 100%;
  color: #1E1F20;
  padding: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    text-align: center;
    width: 100%;
    font-family: "Anton", sans-serif;
    margin-top: 60px;
    margin-bottom: 100px;
    font-size: 32px;
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    padding: 60px;

    h2 {
      font-size: 28px;
      margin-top: 1px;
      margin-bottom: 80px;
    }
  }

  @media (max-width: 480px) {
    padding: 30px;

    h2 {
      font-size: 24px;
      margin-top: 1px;
      margin-bottom: 60px;
    }
  }
`;

export const ServiceSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  width: 100%;

  h3 {
    font-size: 24px;
    color: #1E1F20;
    font-family: "Anton", sans-serif;
    margin-bottom: 40px;
  }

  p {
    margin-top: 10px;
    text-align: justify;
    font-size: 18px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;

    h3 {
      font-size: 20px;
    }

    p {
      font-size: 16px;
    }
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 20px;

    h3 {
      font-size: 18px;
    }

    p {
      font-size: 14px;
    }
  }
`;

export const Button = styled.button`
  margin-top: 120px;
  padding: 10px 20px;
  font-family: "Anton", sans-serif;
  color: #1E1F20;
  background-color: #EFC137;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 18px;
  border: 2px solid #EFC137;

  &:hover {
    background-color: #D0D4CC;
  }

  @media (max-width: 768px) {
    margin-top: 80px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    margin-top: 60px;
    font-size: 14px;
  }
`;
