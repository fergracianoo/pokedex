import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 1.5rem;
  background-color: #f4f4f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin: 2rem 0 3rem 0;
    font-size: 3rem;
    color: #2574cf;

    strong {
      color: #ffde00;
    }
  }
  
  div {
    display: flex;
    flex-wrap: wrap;
    width: 75%;
    margin: 0 auto;
    padding-left: 1.7%;
  }
`;

export const LoadMore = styled.button`
  height: 14rem;
  width: 10rem;
  padding: 1rem;
  display: flex;
  align-items: center; 
  background-color: #d4d4d5;
  border-radius: 10px;
  border: 10px solid #ffde00;
  color: #0f0f0f;
  transition: 200ms;
  box-shadow: 0px 2px 10px #c9c9c9;
  margin-right: 1rem;
  margin-left: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  justify-content: center;

  :hover {
    transform: translateY(-5px);
    filter: brightness(1.1);
  }
`;