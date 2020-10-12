/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { RouteComponentProps } from 'react-router-dom';
import api from '../../services/api';

import { DetailsContainer, MoreDetails, MoreDetailsContent } from './styles';
import Header from '../../components/Header';

interface MatchParams {
  id: string;
}

interface CharacterData {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  episode: string[];
  location: { name: string };
  image: string;
}

const Details: React.FC<RouteComponentProps<MatchParams>> = props => {
  const [moreDetails, setMoreDetails] = useState(false);
  const [character, setCharacter] = useState<CharacterData>(
    {} as CharacterData,
  );
  const { match } = props;
  const { id } = match.params;

  function handleChangeStatusMoreDetails(event: React.MouseEvent) {
    if (moreDetails) {
      setMoreDetails(false);
    } else {
      setMoreDetails(true);
    }
  }

  async function loadCharacter() {
    const data = await api.get(`/${id}`).then(response => response.data);
    setCharacter(data);
  }

  useEffect(() => {
    loadCharacter();
  });

  return (
    <DetailsContainer>
      <Header>
        <a href="/characters">Personagens</a>
      </Header>

      <img src={character.image} alt={`Foto de ${character.name}`} />

      <section>
        <h2>{character.name}</h2>
        <p>
          Espécie:
          {character.species === 'Human' ? ' Humano' : ` ${character.species}`}
        </p>
        <MoreDetails>
          <h3>
            Mais detalhes:
            <button type="button" onClick={handleChangeStatusMoreDetails}>
              {moreDetails === false ? 'Mostrar' : 'Esconder'}
              {moreDetails === false ? <AiFillCaretDown /> : <AiFillCaretUp />}
            </button>
          </h3>
          <MoreDetailsContent>
            {moreDetails ? (
              <ol>
                <li>
                  <p>
                    Status:
                    {character.status === 'unknown'
                      ? ' Desconhecido'
                      : character.status}
                  </p>
                </li>
                <li>
                  <p>
                    Sexo:
                    {character.gender === 'Male' ? ' Masculino' : ' Feminino'}
                  </p>
                </li>
                <li>
                  <p>
                    Aparições em Episódios:
                    {` ${character.episode.length}`}
                  </p>
                </li>
                <li>
                  <p>
                    Planeta:
                    {character.location.name}
                  </p>
                </li>
              </ol>
            ) : (
              ''
            )}
          </MoreDetailsContent>
        </MoreDetails>
      </section>
    </DetailsContainer>
  );
};

export default Details;
