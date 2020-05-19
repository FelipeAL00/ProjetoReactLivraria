import React, { useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { IoIosMenu } from 'react-icons/io';
import {Link} from 'react-router-dom';

import { Container, Pesquisa, Menu, Image } from './styles';
import logo from '../../assets/img/mb.png';

function Header() {
  const [search, setSearch] = useState(false);
  const [optionsOn, setOptionsOn] = useState(false);

  function handleToggleVisible() {
    setSearch(!search);
  }

  function handleMenu() {
    setOptionsOn(!optionsOn);
  }

  return (
    <Container>
      <Menu optionsOn={optionsOn}>
        <nav>
          <ul>
            <Link to = "/genero">
              <li>Gênero</li>
            </Link>
            <Link to = "/publicar">  
              <li>Publicar</li>
            </Link>
            <Link to = "/ajuda">
              <li>Ajuda</li>
            </Link>
          </ul>
        </nav>
        <button onClick={handleMenu}>
          <IoIosMenu size={25} />
        </button>
      </Menu>
      <Image search={search}>
        <img src={logo} alt="MB" />
      </Image>
      <Pesquisa search={search}>
        <button onClick={handleToggleVisible}>
          <GoSearch size={20} color="white" />
        </button>
        <input placeholder="Pesquisar" id="menuPesquisa" />
      </Pesquisa>
    </Container>
  );
}

export default Header;
