import styled from 'styled-components';

export const DetailsContainer = styled.main`
  img {
    width: 100%;
    height: 243px;
    border-radius: 0.5rem;
    margin: 2rem 0;
  }

  section {
    width: 100%;
    height: 10rem;
    background: #000000;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      margin: 1rem;
    }

    p {
      color: #ffffff;
      line-height: 1.4rem;
    }
  }

  @media (max-width: 780px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img,
    section {
      width: 90%;
    }

    section {
      margin-bottom: 2rem;
    }
  }
`;
