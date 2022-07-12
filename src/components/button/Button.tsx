import style from './button.module.css';

interface Props {
  text: string;
  disable?: boolean;
  handleClick?: () => void;
}

const Button = ({ text, disable, handleClick }: Props) => {
  return (
    <button className={style.button} disabled={disable} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
