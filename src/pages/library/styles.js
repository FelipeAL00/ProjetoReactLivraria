import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 10%;
  background: none;
  padding: 0;
  min-height: 100vh;

  @media (min-width: 700px) {
    margin-top: 0;
  }
  a {
    background: #dde;
    transition: all 0.2s;

    &:hover {
      footer {
        background: #eee;
      }
    }

    footer {
      max-height: 50px;
      height: 100%;
      bottom: 0;
      position: fixed;
      width: 100%;
      display: flex;
      align-items: center;
      box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.6);

      h5 {
        font-weight: bold;
        font-size: 14pt;
        color: #000;
        position: absolute;
        right: 13%;
        top: 32%;
      }

      button {
        position: absolute;
        right: 2%;
        top: 22%;
        background: none;
        border: none;
      }
    }
  }

  img {
    width: 100%;
    max-height: 300px;
    height: 100%;
    background: none;
    border-bottom: 5px solid #1ab4ff;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);

    @media (min-width: 700px) {
      height: 50%;
      width: 50%;
    }
  }

  div {
    width: 90%;
    text-align: center;
    padding-bottom: 5px;
    margin-left: 5%;
    margin-top: 2%;

    @media (min-width: 800px) {
      width: 50%;
      margin-left: 25%;
    }

    strong {
      font-weight: bold;
      font-size: 14pt;
      color: #000;
    }

    div {
      width: 90%;
      margin-top: 2%;
      margin-left: 2%;
      text-align: justify;
      box-shadow: none;

      h3 {
        font-weight: bold;
        font-size: 8pt;
      }

      a {
        color: #888;
        font-weight: bold;
      }
    }
  }
`;

export const Badge = styled.div`
  position: absolute;
  width: 100%;

  button {
    right: 0;
    position: absolute;
    border: 0;
    background: #1ab4ff;
    width: 150px;
    font-size: 16pt;
    font-weight: bold;
    padding: 6px;
    border-radius: 4px;
    color: #fff;
    transition: all 0.2s;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);

    &:hover {
      color: #000;
      background: #fff;
      border: 2px solid #1ab4ff;
    }
  }
`;

export const Media = styled.nav`
  display: flex;
  justify-content: center;
  width: 100vw;
  @media (min-width: 700px) {
    background: #333;
    max-height: 300px;
    height: 50%;
    img {
      box-shadow: none;
    }
    border-bottom: 5px solid #1ab4ff;
  }

`;
