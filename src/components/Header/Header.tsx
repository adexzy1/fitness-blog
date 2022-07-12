import React from 'react';
import Navbar from './navbar/Navbar';
import logo from '../../assets/logo.png';
import style from './header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={style.header__container}>
      <Link to={'/'} className={style.logo__wrapper}>
        <img src={logo} alt="logo" />
      </Link>

      <Navbar />
    </div>
  );
};

export default Header;
