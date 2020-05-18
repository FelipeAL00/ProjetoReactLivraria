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
  max-width: 250px;
  width: 100%;
  height: 100%;
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
      font-size: 12pt;
      color: #333;
    }
  }
  img {
    padding-top: 15px;
    width: 100%;
    max-height: 250px;
    height: 100%;
    background: #ccc;
  }

  button {
    border: 2px solid #1ab4ff;
    background: #fff;
    font-weight: bold;
    padding: 3px;
    position: absolute;
    border-radius: 2px;
    color: #1ab4ff;
    bottom: -10%;
    right: 0;

    &:hover {
      border: 2px solid #fff;
      background: #1ab4ff;
      color: #fff;
    }
  }
`;
