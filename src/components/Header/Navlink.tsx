import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';
import style from './header.module.css';

interface Props {
  link: string;
  text: string;
}

const Navlink = ({ link, text }: Props) => {
  let resolved = useResolvedPath(link);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <li className={`${style.navlink} ${match && style.active__link}`}>
      <Link to={link}>{text}</Link>
    </li>
  );
};

export default Navlink;
