import React from 'react';
import Header from './Header';
import EstiloGlobal from './styles';
import Sobre from './Sobre';
import Portfolio from './Portfolio';
import Footer from './Footer';
import Servicos from './Servicos';
import Trabalho from './Trabalho';

const App = () => {
  return (
    <>
      <EstiloGlobal />
      <Header />
      <Servicos />
      <Portfolio />
      <Sobre />
      <Trabalho />
      <Footer />
    </>
  );
}

export default App;
