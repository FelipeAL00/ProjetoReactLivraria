import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  width: 90%;
  display: grid;
  grid-template-columns: 50%;
  grid-gap: 5%;
  justify-content: space-evenly;
  margin-left: 5%;
  margin-top: 15%;

  @media (min-width: 800px) {
    justify-content: center;
    margin-top: 5%;
    margin-left: 18%;
    grid-gap: 0;
  }

  @media (min-width: 450px) {
    grid-template-columns: 40% 40%;
  }
`;

export const ComboBox = styled.div`
  max-height: 250px;
  max-width: 150px;
  width: 100%;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  position: relative;
  margin-top: 15%;
  border-radius: 4px;

  div {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    padding: 3px;
    width: 100%;
    background: #333;
    text-align: center;
    strong {
      font-weight: bold;
      font-size: 12pt;
      color: #fff;
    }
  }
  img {
    max-width: 150px;
    width: 100%;
    max-height: 250px;
    height: 100%;
    background: #333;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
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

    &:hover {
      border: 2px solid #000;
      background: #fff;
      color: #000;
    }
  }
`;
