import React from 'react';

import { DetailsContainer } from './styles';

const Details: React.FC = () => {
  return (
    <DetailsContainer>
      <h1>Personagem: Rick Sanchez</h1>
      <img
        src="https://rickandmortyapi.com/api/character/avatar/10.jpeg"
        alt="Foto de Rick Sanchez"
      />

      <section>
        <p>Status: Vivo</p>
        <p>Espécie: Humano</p>
        <p>Sexo: Masculino</p>
        <p>Tipo: Superhuman (Ghost trains summoner)</p>
      </section>
    </DetailsContainer>
  );
};

export default Details;
