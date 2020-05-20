import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-gap: 5%;
  grid-auto-rows: 300px;
  margin-top: 15%;
  @media(min-width: 450px){
    grid-template-columns:30% 30% 30%;
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
  margin-right: auto;
  margin-left: auto;


  div {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    background: #333;
    padding: 3px;

    strong {
      font-weight: bold;
      font-size: 7pt;
      color: white;
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
    border: 0;
    background: #0797F1;
    font-weight: bold;
    position:absolute;
    right:0;
    bottom:0;
    padding: 2%;
    border-radius: 5%;
    color: whitesmoke;
    z-index: 2;

    &:hover {
      border: 2px solid #000;
      background: whitesmoke;
      color: #0797F1;
      border: 0;
    }
  }
`;
