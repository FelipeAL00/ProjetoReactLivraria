import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-gap: 5%;
  margin-top: 15%;
  @media (min-width: 550px) {
    grid-template-columns: 30% 30% 30%;

  }
`;

export const ComboBox = styled.div`
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  position: relative;
  margin-top: 5%;
  border-radius: 2%;
  width:55%;
  height:80%;
  margin-right:auto;
  margin-left:auto;

  div {
    border-top-left-radius: 2%;
    border-top-right-radius: 2%;
    background: #333;
    strong {
      font-weight: bold;
      font-size: 10pt;
      color: #fff;
    }
  }
  img {
    width: 100%;
    height: 100%;
    background: #333;
    border-bottom-left-radius: 2%;
    border-bottom-right-radius: 2%;
  }
  @media(min-width:650px){
    img{
      transform: scale(1);
      transition: transform 0.6s;
    }
    img:hover{
      transform: scale(1.3);
    }
  }

  button {
    border: 2px solid #fff;
    background: #1ab4ff;
    font-weight: bold;
    padding: 3px;
    position: absolute;
    border-radius: 2px;
    color: #fff;
    right: 0;
    bottom:0;
    z-index:2;

    &:hover {
      border: 2px solid #000;
      background: #fff;
      color: #000;
    }
  }
`;
