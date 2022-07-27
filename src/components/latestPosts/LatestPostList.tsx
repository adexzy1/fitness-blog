import CategoryHeader from '../category header/CategoryHeader';
import style from './latestPostList.module.css';
import useGetLatestPosts from '../../queries/GetLatestPosts';
import RenderBlogList from '../utils/RenderBlogList';

const LatestPostList = () => {
  const { error, loading, data } = useGetLatestPosts();

  return (
    <section className={style.container}>
      <CategoryHeader title="Latest Posts" />

      <>{RenderBlogList({ data, loading, error })}</>
    </section>
  );
};

export default LatestPostList;
