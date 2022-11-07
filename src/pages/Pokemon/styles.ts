import styled from 'styled-components';

export const Container = styled.div`
  width: 60%;
  margin: 2rem auto 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f4fdff;

  a {
    text-decoration: none;
    color: #0f0f0f;
    font-size: 1.5rem;
  }

  h1 {
    font-size: 3rem;
    text-align: center;
  }

  img {
    height: 15rem;
    margin: 0 auto;
  }
`;

export const TypesWrapper = styled.div`
  display: flex;
  margin: 0 auto;

  p:first-child {
    margin-right: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: #ffffff;
    padding: 0.5rem;
    text-shadow: 2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000,
                 1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000;
    border-radius: 16px;
    border: 2px solid #ffffff;
    outline: 2px solid #000000;
  }
`;

export const MovesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 0 2rem 0;

  p {
    width: fit-content;
    padding: 0.5rem;
    background-color: #c5cfd1;
    border-radius: 10px;
    border: 2px solid #ffde00;
    margin: 0.5rem;
  }
`;