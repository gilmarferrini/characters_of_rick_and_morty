import React from 'react';

import { CardContainer } from './styles';

const Card: React.FC = () => (
  <CardContainer>
    <section>
      <img
        src="https://rickandmortyapi.com/api/character/avatar/10.jpeg"
        alt="Foto de Rick Sanchez"
      />
    </section>
    <section>
      <h2>Alan Rails</h2>
      <span>
        <a href="/characters/id">Detalhes</a>
      </span>
    </section>
  </CardContainer>
);

export default Card;
