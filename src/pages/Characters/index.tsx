import React from 'react';

import { CharactersContainer, Cards } from './styles';
import Header from '../../components/Header';
import Card from '../../components/Card';

const Characters: React.FC = () => {
  return (
    <CharactersContainer>
      <Header />
      <h1>Personagens</h1>
      <Cards>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Cards>
    </CharactersContainer>
  );
};

export default Characters;
