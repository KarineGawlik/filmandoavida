import styled from 'styled-components';

export const ContainerFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  background-color: #EFC137;

  div {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 30px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const ImgLogo = styled.img`
  width: 15%;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 25%;
  }

  @media (max-width: 480px) {
    width: 30%;
  }
`;

export const ImgSocialLinks = styled.img`
  width: 20px;

  @media (max-width: 768px) {
    width: 18px;
  }

  @media (max-width: 480px) {
    width: 16px;
  }
`;

export const TextoFooter = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #1E1F20;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;

  a {
    color: #1E1F20;
    text-decoration: none;
    font-size: 1.2rem;
    margin-top: 10px;

    &:hover {
      color: #FFD700;
    }

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }
`;
