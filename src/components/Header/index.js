import React, { useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { IoIosMenu } from 'react-icons/io';
import { FiShoppingCart } from 'react-icons/fi';

import { Container, Pesquisa, Menu, Image } from './styles';
import logo from '../../assets/img/mb.png';
import { Link } from 'react-router-dom';

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
      <Menu optionsOn={optionsOn} id="menuBox">
        <nav>
          <ul>
            <Link to="/cart" onClick={handleMenu}>
              <li>
                <strong>Carrinho</strong>
                <FiShoppingCart size={15} />
              </li>
            </Link>
            <li>Gênero</li>
            <li>Publicar</li>
            <li>Ajuda</li>
          </ul>
        </nav>
        <button onClick={handleMenu} id="btnMenu">
          <IoIosMenu size={25} />
        </button>
      </Menu>
      <Link to="/">
        <Image search={search}>
          <img src={logo} alt="MB" />
        </Image>
      </Link>
      <Pesquisa search={search} id="pesquisaBox">
        <button onClick={handleToggleVisible} id="btnPesquisar">
          <GoSearch size={20} color="white" />
        </button>
        <input placeholder="Pesquisar" id="inputPesquisa" />
      </Pesquisa>
    </Container>
  );
}

export default Header;
