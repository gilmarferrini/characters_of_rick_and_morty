import React, { useState, useEffect } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import api from '../../services/api';

import { CharactersContainer, Cards, Pagination } from './styles';
import Header from '../../components/Header';
import Card from '../../components/Card';

interface CharacterData {
  id: number;
  name: string;
  image: string;
}

const Characters: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pagesTotal, setPagesTotal] = useState(0);
  const [currentCharacters, setCurrentCharacters] = useState<CharacterData[]>(
    [] as CharacterData[],
  );

  function incrementPage() {
    if (currentPage < pagesTotal) {
      setCurrentPage(currentPage + 1);
    }
  }

  function decrementPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  async function loadCharacters(page = 1) {
    const characters = await api
      .get(`?page=${page}`)
      .then(response => response.data);
    setPagesTotal(characters.info.pages);
    setCurrentCharacters(characters.results);
  }

  useEffect(() => {
    loadCharacters(currentPage);
  }, [currentPage]);

  return (
    <CharactersContainer>
      <Header>
        <a href="/">Página inicial</a>
      </Header>
      <h1>Personagens</h1>
      <Cards>
        {currentCharacters.map(character => (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
      </Cards>

      <Pagination>
        <FiArrowLeft onClick={decrementPage} />
        <span>{`${currentPage}/${pagesTotal}`}</span>
        <FiArrowRight onClick={incrementPage} />
      </Pagination>

    </CharactersContainer>
  );
};

export default Characters;
