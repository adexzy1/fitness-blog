import Button from '../button/Button';
import style from './newsLetter.module.css';

const NewsLetter = () => {
  return (
    <form className={style.form__container}>
      <h3>Subscribe to our newsletter</h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum. text of the <br /> printing and typesetting
      </p>

      <div className={style.forn__input__wrapper}>
        <input type="text" placeholder="Enter Your Email" />
      </div>

      <Button text="Subscribe" />
    </form>
  );
};

export default NewsLetter;
