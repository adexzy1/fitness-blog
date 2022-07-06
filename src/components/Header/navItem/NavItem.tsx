import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import style from './navItem.module.css';

interface Props {
  link: string;
  text: string;
}

const NavItem = ({ link, text }: Props) => {
  let resolved = useResolvedPath(link);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <li className={`${style.navlink} ${match ? style.active__link : ''}`}>
      <Link to={link}>{text}</Link>
    </li>
  );
};

export default NavItem;
