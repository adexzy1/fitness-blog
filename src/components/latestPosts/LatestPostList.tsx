import CategoryHeader from '../category header/CategoryHeader';
import PostCard from '../PostCard/PostCard';
import style from './latestPostList.module.css';

const LatestPostList = () => {
  return (
    <section className={style.container}>
      <CategoryHeader title="Latest Posts" />

      <div className={style.post__list}>
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </section>
  );
};

export default LatestPostList;
