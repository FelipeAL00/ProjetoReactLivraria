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
    grid-template-columns:25% 25% 25%;
  } 
`;

export const ComboBox = styled.div`
  width: 65%;
  height: 70%;
  background: black;
  border-radius: 2px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  position: relative;
  margin-top: 15%;
  margin-left: auto;
  margin-right:auto;

  div {
    width: 100%;
    background: #ccc;
    text-align: center;
    strong {
      font-weight: bold;
      font-size: 7pt;
      color: #363636;
      display: flex;
    }
  }
  @media(min-width: 321px){
    div strong{
      font-size:9pt;
    }
  }
  img {
    width: 100%;
    height: 100%;
    background: #ccc;
    
  }
  @media(min-width: 801px){
    img{
      transform:scale(1);
      transition: transform 0.5s;
    }
    img:hover{
    transform: scale(1.2);
  }
  }

  button {
    border: 2px solid #1ab4ff;
    background: none;
    font-weight: bold;
    padding: 2%;
    border-radius: 5%;
    color: #fff;
    &:hover {
      border: 2px solid #fff;
      background: #1ab4ff;
    }
  }
`;
