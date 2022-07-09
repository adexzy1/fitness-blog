import logo from '../../assets/logo.png';
import style from './footer.module.css';
import { GrFacebookOption } from 'react-icons/gr';
import { BsTwitter } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import NavItem from '../Header/navItem/NavItem';

const Footer = () => {
  return (
    <footer className={style.footer__container}>
      <section className={style.main__footer_container}>
        <div className={style.footer__blog_details}>
          <div className={style.logo__container}>
            <img src={logo} alt="logo" />
          </div>

          <p>
            Lorem Ipsum is simply dummy text of the printing <br /> and
            typesetting industry. Lorem Ipsum.
          </p>

          <div className={style.social__icon_container}>
            <span>
              <GrFacebookOption />
            </span>

            <span>
              <BsInstagram />
            </span>

            <span>
              <BsTwitter />
            </span>

            <span>
              <FaWhatsapp />
            </span>
          </div>
        </div>

        <div className={style.footer__quick_links}>
          <h5>Info</h5>
          <ul>
            <NavItem text="About" link="/" />
            <NavItem text="Careers" link="/" />
            <NavItem text="Press" link="/" />
          </ul>
        </div>

        <div className={style.footer__quick_links}>
          <h5>Get In Touch</h5>
          <ul>
            <NavItem text="About Us" link="/" />
            <NavItem text="Support" link="/" />
            <NavItem text="Contact" link="/" />
          </ul>
        </div>

        <div className={style.footer__quick_links}>
          <h5>Categories</h5>
          <ul>
            <NavItem text="About Us" link="/" />
            <NavItem text="Support" link="/" />
            <NavItem text="Contact" link="/" />
          </ul>
        </div>
      </section>

      <section className={style.subfooter__container}>
        <p>Copyright &copy; 2021 Enisson Lemos | All right reserved</p>
        <p>Terms & Conditions</p>
      </section>
    </footer>
  );
};

export default Footer;
