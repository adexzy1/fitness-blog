import CategoryHeader from '../category header/CategoryHeader';
import style from './latestPostList.module.css';
import useGetLatestPosts from '../../queries/GetLatestPosts';
import BlogList from '../Blog-list/BlogList';

const LatestPostList = () => {
  const { error, loading, data } = useGetLatestPosts();

  return (
    <section className={style.container}>
      <CategoryHeader title="Latest Posts" />

      <BlogList
        data={data?.posts}
        loading={loading}
        error={error}
        skeletonNumber={3}
      />
    </section>
  );
};

export default LatestPostList;
