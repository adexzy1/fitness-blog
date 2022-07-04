import Navlink from './Navlink';
import style from './header.module.css';
import { HiMenuAlt3 } from 'react-icons/hi';

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <section className={style.toggle__icon}>
        <HiMenuAlt3 />
      </section>

      <ul className={style.navitem__container}>
        <Navlink link={'/'} text={'Home'} />
        <Navlink link={'/c'} text={'COMMUNITY'} />
        <Navlink link={'/p'} text={'PRICING'} />
        <Navlink link={'/a'} text={'ABOUT US'} />
      </ul>
    </nav>
  );
};

export default Navbar;
