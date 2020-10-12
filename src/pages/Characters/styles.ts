import styled from 'styled-components';
export const CharactersContainer = styled.main`
  width: 100%;
  text-align: center;
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0.4rem;

  h1 {
    margin: 1rem 0;
  }

  > div {
    margin: 0.3rem;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 1rem 0;

  svg {
    background: #ffe6e6;
    border-radius: 0.6rem;
    height: 2rem;
    width: 2rem;
    cursor: pointer;
  }

  span {
    font-size: 1.6rem;
    color: #ffffff;
  }
`;
