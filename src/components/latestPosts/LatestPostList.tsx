import BlogList from '../Blog-list/BlogList';
import CategoryHeader from '../category header/CategoryHeader';
import style from './latestPostList.module.css';

const LatestPostList = () => {
  const items: number[] = [1, 2, 3];
  return (
    <section className={style.container}>
      <CategoryHeader title="Latest Posts" />

      <BlogList data={items} />
    </section>
  );
};

export default LatestPostList;
