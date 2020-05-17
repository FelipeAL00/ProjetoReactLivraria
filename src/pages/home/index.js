import React from 'react';

import { Container, ComboBox } from './styles';
import lib from '../../assets/img/lib.jpg';
import lib2 from '../../assets/img/harry.png';

function Home() {
  return <Container>
      <ComboBox>
        <div>
          <strong>Julio Verne - Viagem ao Centro da terra</strong>
        </div>
        <button>Ver Mais</button>
        <img  src={lib} alt="Julio Verne - Viagem ao Centro da Terra"/>
      </ComboBox>
      <ComboBox>
        <div>
          <strong>Box Harry Potter - Coleção Completa</strong>
        </div>
        <button>Ver Mais</button>
        <img  src={lib2} alt="Julio Verne - Viagem ao Centro da Terra"/>
      </ComboBox>
      <ComboBox>
        <div>
          <strong>Julio Verne - Viagem ao Centro da terra</strong>
        </div>
        <button>Ver Mais</button>
        <img  src={lib} alt="Julio Verne - Viagem ao Centro da Terra"/>
      </ComboBox>
      <ComboBox>
        <div>
          <strong>Julio Verne - Viagem ao Centro da terra</strong>
        </div>
        <button>Ver Mais</button>
        <img  src={lib} alt="Julio Verne - Viagem ao Centro da Terra"/>
      </ComboBox>
      <ComboBox>
        <div>
          <strong>Julio Verne - Viagem ao Centro da terra</strong>
        </div>
        <button>Ver Mais</button>
        <img  src={lib} alt="Julio Verne - Viagem ao Centro da Terra"/>
      </ComboBox>
  </Container>;
}

export default Home;
