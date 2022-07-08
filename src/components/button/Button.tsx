import style from './button.module.css';

interface Props {
  text: string;
}

const Button = ({ text }: Props) => {
  return <button className={style.button}>{text}</button>;
};

export default Button;
