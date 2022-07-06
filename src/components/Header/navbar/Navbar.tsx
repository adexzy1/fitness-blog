import NavItem from '../navItem/NavItem';
import style from './navbar.module.css';
import { HiMenuAlt3 } from 'react-icons/hi';
import { useState } from 'react';

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <nav className={style.nav}>
      <section className={style.toggle__icon} onClick={handleToggle}>
        <HiMenuAlt3 />
      </section>

      <ul
        className={`${style.navitem__container} ${
          toggle && style.toggle__menu
        }`}
      >
        <NavItem link={'/'} text={'HOME'} />
        <NavItem link={'/c'} text={'TECH'} />
        <NavItem link={'/p'} text={'CONTACT'} />
        <NavItem link={'/a'} text={'ABOUT US'} />
      </ul>
    </nav>
  );
};

export default Navbar;
