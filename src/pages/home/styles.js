import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  width: 80%;
  display: grid;
  grid-template-columns:50%;
  grid-gap: 5%;
  justify-content: space-evenly;
  margin-left: 10%;
  margin-top: 15%;
  @media(min-width: 450px){
    grid-template-columns:40% 40%;
  } 
`;

export const ComboBox = styled.div`
  width: 100%;
  height: 100%;
  background: black;
  border-radius: 2px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  position: relative;
  margin-top: 15%;

  div {
    width: 100%;
    background: #ccc;
    text-align: center;
    strong {
      font-weight: bold;
      font-size: 8pt;
      color: #333;
      display: flex;
    }
  }
  img {
    padding-top: 15px;
    width: 100%;
    height: 100%;
    background: #ccc;
  }

  button {
    border: 2px solid #1ab4ff;
    background: none;
    font-weight: bold;
    padding: 3px;
    position:relative;
    border-radius: 5%;
    color: #fff;

    &:hover {
      border: 2px solid #fff;
      background: #1ab4ff;
    }
  }
`;
