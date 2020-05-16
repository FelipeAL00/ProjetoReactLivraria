import React, { useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { IoIosMenu } from 'react-icons/io';

import { Container, Pesquisa, Menu } from './styles';

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
        <button onClick={handleMenu}>
          <IoIosMenu size={23} />
        </button>
        <nav>
          <ul>
            <li>Teste</li>
          </ul>
        </nav>
      </Menu>
      <h1>Livraria MB</h1>
      <Pesquisa search={search}>
        <button onClick={handleToggleVisible}>
          <GoSearch size={23} color="white" />
        </button>
        <input placeholder="Pesquisar" id="menuPesquisa" />
      </Pesquisa>
    </Container>
  );
}

export default Header;
