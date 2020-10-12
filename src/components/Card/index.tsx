/* eslint-disable react/prop-types */
import React from 'react';

import { AiOutlineRead } from 'react-icons/ai';
import { CardContainer } from './styles';

interface CardData {
  id: number;
  name: string;
  image: string;
}

const Card: React.FC<CardData> = props => {
  const { id, name, image } = props;
  return (
    <CardContainer>
      <section>
        <img src={image} alt={`Foto de ${name}`} />
      </section>
      <section>
        <h2>{name}</h2>
        <span>
          <a href={`/characters/${id}`}>
            Detalhes
            <AiOutlineRead />
          </a>
        </span>
      </section>
    </CardContainer>
  );
};

export default Card;
