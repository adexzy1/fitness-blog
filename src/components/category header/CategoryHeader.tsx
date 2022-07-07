import style from './categoryHeader.module.css';

interface Props {
  title: string;
}

const CategoryHeader = ({ title }: Props) => {
  return (
    <section className={style.container}>
      <h2>{title}</h2>
      <p>See More</p>
    </section>
  );
};

export default CategoryHeader;
