import styled, { css } from 'styled-components';

export const Container = styled.div`
  z-index: 1;
  color: #fff;
  max-height: 50px;
  max-width: 100vw;
  height: 100%;
  width: 100%;
  position: fixed;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #1ab4ff;

  h1 {
    font-weight: bold;
    border-right: 3px solid #fff;
    padding: 0.2em 0.7em;
    width: 10%;
    height: 10px;
    font-size: 18pt;
  }

  img {
    width: 3.5em;
  }
`;

export const Pesquisa = styled.div`
  margin-right: 2%;
  max-width: 200px;
  width: ${(props) => (props.search ? '100%' : '0')};
  height: ${(props) => (props.search ? '50%' : '0')};

  @media (min-width: 800px) {
    width: 100%;
    height: 50%;
    background: ${(props) => (props.search ? '#333' : 'none')};
    box-shadow: ${(props) =>
      props.search ? '2px 2px 2px rgba(0, 0, 0, 0.3)' : 'none'};

    button {
      right: 3%;
    }
  }

  display: flex;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  background: #333;
  border-radius: 5px;

  input {
    width: 80%;
    height: 100%;
    color: #fff;
    border: 0;
    display: ${(props) => (props.search ? 'block' : 'none')};
    background: none;
    margin-left: 5%;

    ${(props) => props.search && css``}
  }

  button {
    background: none;
    border: 0;
    display: block;
    cursor: pointer;
    position: absolute;
    @media (max-width: 450px) {
      right: 5%;
    }
    top: 32%;
  }
`;

export const Menu = styled.div`
  margin-left: 2%;

  button {
    background: none;
    border: 0;
    cursor: pointer;
    display: block;
    position: relative;

    color: ${(props) => (props.optionsOn ? 'white' : '#fff')};
  }

  nav {
    color: #000;
    position: absolute;
    left: 2%;
    width: 25%;
    display: ${(props) => (props.optionsOn ? 'block' : 'none')};
    background: #1f264b;
    border-radius: 2%;
    ul {
      margin-top: 25%;
      li {
        padding: 10px;
        color: white;
        border-top: 1px solid #fff;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        strong {
          font-weight: bold;
          font-size: 9pt;
        }
      }
      li:hover,
      :active {
        border-radius: 5%;
        background: #1e90ff;
      }
    }
  }
  @media (min-width: 650px) {
    nav {
      width: 15%;
    }
  }
`;

export const Image = styled.div`
  @media (min-width: 800px) {
    display: block;
    position: absolute;
    top: 0;
    width: 100%;
    margin-left: 5%;
  }
  display: ${(props) => (props.search ? 'none' : 'block')};
`;
