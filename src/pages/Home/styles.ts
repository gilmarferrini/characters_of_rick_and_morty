import styled from 'styled-components';

import charactersBackground from '../../assets/images/charactersBackground.jpeg';
import episodesBackground from '../../assets/images/episodesBackground.jpg';

export const HomeContainer = styled.main`
  width: 100%;
  height: 80vh;

  text-align: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;

  section {
    margin-top: 4rem;
    background: url(${charactersBackground}) center center / cover;
  }

  section + section {
    margin-left: 1rem;
    background: url(${episodesBackground}) center center / cover;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    section + section {
      margin-left: 0;
    }
  }
`;

export const Option = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 60vh;
  width: 40vw;

  border-radius: 1rem;
  filter: blur(6px);
  transition: 0.2s;

  &:hover {
    filter: blur(0);
    transform: scale(1.01);
  }

  h1 {
    position: absolute;
    font-size: 2.4rem;

    a {
      color: #000000;
    }
  }

  @media (max-width: 700px) {
    height: 60vh;
    width: 100%;
    filter: blur(0);

    h1 {
      font-size: 2rem;
    }
  }
`;
