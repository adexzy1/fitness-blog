import React from 'react';
import Navbar from './navbar/Navbar';
import logo from '../../assets/logo.png';
import style from './header.module.css';

const Header = () => {
  return (
    <div className={style.header__container}>
      <section className={style.logo__wrapper}>
        <img src={logo} alt="logo" />
      </section>

      <Navbar />
    </div>
  );
};

export default Header;
