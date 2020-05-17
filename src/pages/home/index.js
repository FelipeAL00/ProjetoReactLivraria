import React from 'react';

import { Container, ComboBox } from './styles';
import lib from '../../assets/img/lib.jpg';

function Home() {
  return <Container>
      <ComboBox>
        <div>
          <strong>Julio Verne - Viagem ao Centro da terra</strong>
        </div>
        <img  src={lib} alt="Julio Verne - Viagem ao Centro da Terra"/>
        <button>Ver Mais</button>
      </ComboBox>
      <ComboBox>
        <div>
          <strong>Julio Verne - Viagem ao Centro da terra</strong>
        </div>
        <img  src={lib} alt="Julio Verne - Viagem ao Centro da Terra"/>
        <button>Ver Mais</button>
      </ComboBox>
      <ComboBox>
        <div>
          <strong>Julio Verne - Viagem ao Centro da terra</strong>
        </div>
        <img  src={lib} alt="Julio Verne - Viagem ao Centro da Terra"/>
        <button>Ver Mais</button>
      </ComboBox>
      <ComboBox>
        <div>
          <strong>Julio Verne - Viagem ao Centro da terra</strong>
        </div>
        <img  src={lib} alt="Julio Verne - Viagem ao Centro da Terra"/>
        <button>Ver Mais</button>
      </ComboBox>
  </Container>;
}

export default Home;
