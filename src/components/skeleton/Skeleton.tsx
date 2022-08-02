import style from './skeleton.module.css';

interface Props {
  type: string;
}

const Skeleton = ({ type }: Props) => {
  const classes = `${style.skeleton} ${style[type]}`;

  return <div className={classes}></div>;
};

export default Skeleton;
