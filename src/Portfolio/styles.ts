import styled from 'styled-components';

export const PortfolioContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto;
  gap: 60px;
  padding: 80px;
  background-color: #1E1F20;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    width: 100%;
    gap: 30px;
    padding: 40px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    width: 100%;
    gap: 20px;
    padding: 20px;
  }
`;

export const VideoItem = styled.div<{ large?: boolean }>`
  width: 100%;
  height: 0;
  padding-bottom: ${({ large }) => (large ? '56.25%' : '60%')};
  position: relative;
  grid-column: ${({ large }) => (large ? '1 / span 3' : 'auto')};

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    grid-column: ${({ large }) => (large ? '1 / span 2' : 'auto')};
  }

  @media (max-width: 480px) {
    grid-column: 1 / -1;
  }
`;

export const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-family: "Anton", sans-serif;
  color: #1E1F20;
  background-color: #EFC137;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 18px;
  border: 2px solid #EFC137;

  @media (max-width: 768px) {
      font-size: 14px;
    }

  &:hover {
    background-color: #D0D4CC;
  }
`;
