import styled from 'styled-components';

export const Container = styled.div`
  color: #fff;
  max-height: 50px;
  max-width: 360px;
  width: 100%;
  position: fixed;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #1ab4ff;

  h4 {
    font-weight: bold;
    border-right: 3px solid #fff;
    padding: 0.2em 0.7em;
    width: 10%;
    height: 10px;
  }
`;

export const Pesquisa = styled.div`
  input {
    max-width: 25%;
    height: 50%;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 4px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
    display: ${(props) => (props.search ? 'block' : 'none')};
  }

  button {
    display: ${(props) => (props.search ? 'none' : 'block')};
    background: none;
    border: 0;
    cursor: pointer;
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
    top: 50%;
    left: 0;
    display: ${(props) => (props.optionsOn ? 'block' : 'none')};
  }
`;
