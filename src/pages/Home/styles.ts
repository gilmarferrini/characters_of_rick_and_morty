import styled from 'styled-components';

import CharactersBackground from '../../assets/images/charactersBackground.jpeg';

export const HomeContainer = styled.main`
  text-align: center;

  img {
    max-width: 100%;
    height: 280px;
  }

  @media (max-width: 768px) {
    img {
      width: 80%;
      height: 224px;
    }
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  section {
    height: 349px;
    width: 397px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;

    filter: blur(5px);
    transition: 0.1s;

    h1 {
      font-size: 2rem;
    }

    h1 a {
      color: #000000;
    }

    &:hover {
      filter: blur(0);
      transform: scale(1.01);
    }
  }

  section {
    background: url(${CharactersBackground}) no-repeat center center / cover;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    section {
      width: 80%;
      filter: blur(0);
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
`;
