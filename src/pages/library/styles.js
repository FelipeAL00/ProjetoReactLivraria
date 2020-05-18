import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 10%;
  background: none;
  padding: 0;

  a {
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
      position: absolute;
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
    padding-top: 15px;
    width: 100%;
    max-height: 300px;
    height: 100%;
    background: none;
    border-bottom: 5px solid #1ab4ff;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  }

  div {
    width: 90%;
    text-align: center;
    padding-bottom: 5px;
    margin-left: 5%;

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
