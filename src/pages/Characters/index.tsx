import React from 'react';

import { CharactersContainer, Cards } from './styles';
import Card from '../../components/Card';
import Header from '../../components/Header';

const Characters: React.FC = () => {
  return (
    <>
      <Header />
      <h1>Personagens</h1>
      <CharactersContainer>
        <Cards>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Cards>
      </CharactersContainer>
    </>
  );
};

export default Characters;
