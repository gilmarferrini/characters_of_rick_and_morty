import React from 'react';

import { DetailsContainer } from './styles';
import Header from '../../components/Header';

const Details: React.FC = () => {
  return (
    <DetailsContainer>
      <Header />

      <img
        src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        alt="Imagem de Rick Sanchez"
      />

      <section>
        <h2>Rick Sanchez</h2>
        <p>Status: Vivo</p>
        <p>Espécie: Humano</p>
        <p>Sexo: Masculino</p>
        <p>Aparições em Episódios: 40</p>
      </section>
    </DetailsContainer>
  );
};

export default Details;
