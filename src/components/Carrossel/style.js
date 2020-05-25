import styled from 'styled-components';


export const Carrossel = styled.div`
    width:100%;
    padding-top:13%;
    margin-right:auto;
    margin-left:auto;
    background: none;


    @media(min-width: 700px) {
      padding-top: 3%;
    }
    h1{
        text-align:center;
        color:#333;
        line-height:1.5em;
    }

    img {
      max-height: 200px;
      height: 100%;
    }
`;
