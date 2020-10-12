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
    min-height: 10rem;
    background: #000000;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;

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

export const MoreDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  h3 {
    margin: 1rem 0;
  }

  button {
    padding: 0.3rem 0.5rem;
    margin-left: 0.4rem;
    border-radius: 0.4rem;
    outline: 0ch;
    font-size: 0.8rem;
    font-weight: bold;
    color: #ffffff;
    background: #235789;
  }
`;


export const MoreDetailsContent = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
