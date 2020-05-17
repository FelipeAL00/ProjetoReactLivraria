import styled, { css } from 'styled-components';

export const Container = styled.div`
  z-index: 1;
  color: #fff;
  max-height: 50px;
  max-width: 100vw;
  height:100%;
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
    max-width: 50px;
  }
`;

export const Pesquisa = styled.div`
  margin-right: 2%;
  display: flex;

  input {
    max-width: 200px;
    width: 100%;
    height: 50%;
    color: #333;
    border: 0;
    border-radius: 2px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
    display: ${(props) => (props.search ? 'block' : 'none')};

    text-align: center;

    ${(props) =>
      props.search &&
      css`
        margin-left: 35px;
        margin-top: 0;
      `}
  }

  button {
    background: none;
    border: 0;
    display: block;
    cursor: pointer;
    position: relative;
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

    color: ${(props) => (props.optionsOn ? '#000' : '#fff')};
  }

  nav {
    background: #fff;
    color: #000;
    position: absolute;
    height: 300px;
    width: 300px;
    top: 25%;
    left: 2%;
    display: ${(props) => (props.optionsOn ? 'block' : 'none')};

    ul {
      margin-top: 8%;

      li {
        padding: 10px;
        border-top: 2px solid #000;
      }
    }
  }
`;

export const Image = styled.div`
  display: ${(props) => (props.search ? 'none' : 'block')};
`;
