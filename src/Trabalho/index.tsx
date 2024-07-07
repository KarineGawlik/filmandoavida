import React from 'react';
import { Link } from 'react-router-dom';
import { Button, ContainerTrabalho, TextoTrabalho, ServiceSection } from './styles';

const Trabalho: React.FC = () => {
  return (
    <ContainerTrabalho id='Trabalho'>
      <TextoTrabalho>
        <h2>MEUS SERVIÇOS</h2>
        <ServiceSection>
          <div>
            <h3>Edição de Reels/Tiktok/Shorts</h3>
            <p>
              Ideal para Produtores de conteúdo, Lançadores, Blogueiros(as), Social Media's e todo profissional que precisa sempre produzir conteúdo em vídeo para manter sua presença nas redes. Essa solução de edição pode te ajudar a ganhar tempo, pois seus vídeos brutos são encaminhados para mim e os entrego com legenda, vinheta final, capa, tudo dentro da sua identidade visual e pronto para postar.
            </p>
          </div>
          <div>
            <h3>Edição para Canais no Youtube</h3>
            <p>
              É Youtuber ou está começando sua trajetória na plataforma? Posso te ajudar sendo seu editor, afinal produzir conteúdo com frequência e com todos os detalhes que um vídeo bem editado exige, não é pra qualquer um. Me deixe ser seu editor e te entregar tudo pronto para postagem.
            </p>
          </div>
        </ServiceSection>
        <Link to="https://wa.me/5541988266468">
          <Button>Solicite seu orçamento</Button>
        </Link>
      </TextoTrabalho>
    </ContainerTrabalho>
  );
};

export default Trabalho;
