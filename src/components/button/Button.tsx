import style from './button.module.css';

interface Props {
  text: string;
  disable?: boolean;
}

const Button = ({ text, disable }: Props) => {
  return (
    <button className={style.button} disabled={disable}>
      {text}
    </button>
  );
};

export default Button;
