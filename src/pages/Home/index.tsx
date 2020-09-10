import React from 'react';

import { HomeContainer, Content, Option } from './styles';

const Home: React.FC = () => (
  <HomeContainer>
    <h1>Seja bem-vindo</h1>
    <h3>Escolha uma opção</h3>
    <Content>
      <Option>
        <h1>
          <a href="/characters">Personagens</a>
        </h1>
      </Option>
      <Option>
        <h1>
          <a href="/">Episódios</a>
        </h1>
      </Option>
    </Content>
  </HomeContainer>
);

export default Home;
