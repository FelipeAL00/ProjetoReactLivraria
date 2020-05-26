import styled from 'styled-components';

export const Carrossel = styled.div`
    width:50%;
    padding-top:15%;
    margin-right:auto;
    margin-left:auto;
    h1{
        text-align:center;
        color:#333;
        line-height:1.5em;
    }
    @media(min-width: 500px){
        padding-top:10%;
        width:40%;
    }
    @media(min-width: 800px){
        padding-top:10%;
        width:30%;
    }
`;