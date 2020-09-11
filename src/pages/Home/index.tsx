import React from 'react';

import { HomeContainer, Options } from './styles';
import background from '../../assets/images/background.png';

const Home: React.FC = () => (
  <>
    <HomeContainer>
      <img src={background} alt="Background" />

      <Options>
        <section>
          <h1>
            <a href="/characters">Personagens</a>
          </h1>
        </section>
      </Options>
    </HomeContainer>
  </>
);

export default Home;
