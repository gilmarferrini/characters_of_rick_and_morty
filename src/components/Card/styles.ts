import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 20rem;
  height: 14rem;

  margin-top: 2rem;
  margin: 1rem;

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 10rem;
  }

  h2 {
    overflow: hidden;
  }

  section img {
    height: 10rem;
    width: 10rem;
    border-radius: 20%;
  }

  section + section {
    margin-left: 0.6rem;
  }

  section span {
    padding: 0.2rem;
    margin-top: 0.4rem;
    border-radius: 0.2rem;
    background: green;
  }

  section span a {
    font-weight: bold;
    color: #ffffff;
  }
`;
