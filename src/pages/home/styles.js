import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  width: 80%;
  display: grid;
  grid-template-columns: 40% 40%;
  grid-auto-rows: 200px;
  grid-gap: 10%;
  justify-content: space-evenly;
  margin-left: 10%;
  margin-top: 15%;
`;

export const ComboBox = styled.div`
  max-width: 120px;
  width: 100%;
  height: 100%;
  background: #ddd;
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
    position: absolute;
    bottom: -12%;
    left: 35%;
    border-radius: 2px;
    color: #fff;

    &:hover {
      border: 2px solid #fff;
      background: #1ab4ff;
    }
  }
`;
