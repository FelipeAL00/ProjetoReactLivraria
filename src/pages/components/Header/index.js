import React, { useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { IoIosMenu } from 'react-icons/io';

import { Container, Pesquisa, Menu, Image } from './styles';
import logo from '../../../assets/img/mb.png';

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
            <li>Gênero</li>
            <li>Publicar</li>
            <li>Ajuda</li>
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
