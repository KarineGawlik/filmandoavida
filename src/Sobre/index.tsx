import React from 'react';
import { ContainerSobre, TextoSobre, ImageContainer, TextContainer } from './styles';

const Sobre: React.FC = () => {
  return (
    <ContainerSobre id="sobre">
      <TextContainer>
        <TextoSobre>
          SOU MAYCON OLIVEIRA
        </TextoSobre>
        <TextoSobre>
          HÁ 11 ANOS
        </TextoSobre>
        <TextoSobre>
          FILMANDO A VIDA
        </TextoSobre>
      </TextContainer>
      <ImageContainer />
    </ContainerSobre>
  );
};

export default Sobre;
