import styled from 'styled-components';

export const Container = styled.a`
  height: 14rem;
  width: 10rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center; 
  background-color: #c5cfd1;
  border-radius: 10px;
  border: 10px solid #ffde00;
  text-decoration: none;
  color: #0f0f0f;
  transition: 200ms;
  box-shadow: 0px 2px 10px #c9c9c9;
  margin-right: 1rem;
  margin-left: 1rem;
  margin-bottom: 1rem;

  :hover {
    transform: translateY(-5px);
    filter: brightness(1.1);
  }

  img {
    height: 9rem;
  }

  p {
    font-size: 1.25rem;
  }

  .description {
    display: flex;
    width: 100%;
    justify-content: space-between;

    img {
      height: 1rem;
      margin-right: 5px;
    }

    p {
      font-size: 1rem;
    }
  }
`;