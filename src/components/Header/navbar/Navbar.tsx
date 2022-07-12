import NavItem from '../navItem/NavItem';
import { HiMenuAlt3 } from 'react-icons/hi';
import { useState } from 'react';
import style from './navbar.module.css';
import useClickOutside from '../../../hooks/useClickOutside';

const Navbar = () => {
  // state
  const [toggle, setToggle] = useState<boolean>(false);

  // custom hook
  const { ref } = useClickOutside(() => setToggle(false));

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <nav ref={ref} className={style.nav}>
      <section className={style.toggle__icon} onClick={handleToggle}>
        <HiMenuAlt3 />
      </section>

      <ul
        className={`${style.navitem__container} ${
          toggle && style.toggle__menu
        }`}
      >
        <NavItem link={'/'} text={'HOME'} />
        <NavItem link={'/fitness'} text={'FITNESS'} />
        <NavItem link={'/nutrition'} text={'NUTRITION'} />
        <NavItem link={'/keto-diet'} text={'KETO DIET'} />
      </ul>
    </nav>
  );
};

export default Navbar;
