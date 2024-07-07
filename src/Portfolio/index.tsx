import React from 'react';
import { PortfolioContainer, VideoItem, Button } from './styles';
import { Link } from 'react-router-dom';

const Portfolio: React.FC = () => {
  return (
    <PortfolioContainer id='portfolio'>
      <VideoItem large>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/YcjnE8SoC68"
          title="Video 1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoItem>
      <VideoItem>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/lBhtvcZLuAU?si=irMkTTLhzPqxnlWt"
          title="Video 2"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoItem>
      <VideoItem>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/-uT2GJMv02g?si=n_E9nj3bSVqem4vU"
          title="Video 3"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoItem>
      <VideoItem>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/-Z_ifobcR2c?si=tjGbVmyNLNU3vpcm"
          title="Video 4"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoItem>
      <VideoItem>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/VuCZQq0CTFg?si=lJXqMFAB24nnQSWR"
          title="Video 5"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoItem>
      <VideoItem>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/qi3CGqcD6jk?si=JhaQkWC0ZGmi0NzF"
          title="Video 6"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoItem>
      <VideoItem>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/s_2S9vE7XyQ?si=X02qaZMmHW3I4d7v"
          title="Video 6"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoItem>
      <Link to="https://www.youtube.com/@filmandoavida_/videos">
          <Button>Veja mais vídeos</Button>
      </Link>
    </PortfolioContainer>
  );
};

export default Portfolio;
