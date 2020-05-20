import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-gap: 5%;
  grid-auto-rows: 300px;
  margin-top: 15%;
  @media (min-width: 550px) {
    grid-template-columns: 30% 30% 30%;
    margin-top: 8%;
  }
`;

export const ComboBox = styled.div`
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  position: relative;
  margin-top: 5%;
  border-radius: 2%;
  width: 55%;
  height: 80%;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 100px;
  text-align: center;

  div {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    background: #333;
    padding: 3px;
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
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  @media (min-width: 650px) {
    img {
      transform: scale(1);
      transition: transform 0.8s;
    }
    img:hover {
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
    bottom: 0;
    z-index: 2;

    &:hover {
      border: 2px solid #000;
      background: #fff;
      color: #000;
    }
  }
`;
