import styled, { css } from 'styled-components';

export const Container = styled.div`
  max-height: 50px;
  height: 100%;
  color: #fff;
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
  display:flex;
  input {
  
    width: 90%;
    height: 50%;
    color: #333;
    border: 0;
    border-radius: 2px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
    display: ${(props) => (props.search ? 'block' : 'none')};



    ${(props) =>
      props.search &&
      css`
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

    color: ${(props) => (props.optionsOn ? 'white' : '#fff')};
  }

  nav {
    color: #000;
    position: absolute;
    left: 2%;
    display: ${(props) => (props.optionsOn ? 'block' : 'none')};
    background: #1F264B;
    border-radius: 5%;
    ul {
      margin-top: 18%;
      li {
        padding: 10px;
        color: white;
        font-size:10pt;
      }
    }
  }
`;

export const Image = styled.div`
  display: ${(props) => (props.search ? 'none' : 'block')};
`;
