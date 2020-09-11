import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  width: 380px;
  height: 182px;
  border-radius: 1rem;
  background: #000000;
  margin: 2rem 0;

  img {
    width: 160px;
    height: 160px;
    border-radius: 1rem;
    margin: 0 1rem;
  }

  section + section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
  }

  span {
    width: 80px;
    height: 40px;
    background: #235789;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    margin-top: 1rem;

    > a {
      font-size: 1rem;
      font-weight: bold;
      color: #ffffff;
    }
  }

  @media (max-width: 700px) {
    width: 380px;
    height: 182px;

    h2 {
      font-size: 1rem;
    }

    span a {
      font-size: 0.8rem;
    }
  }
`;
