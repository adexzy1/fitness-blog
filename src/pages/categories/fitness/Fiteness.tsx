import style from '../categories.module.css';
import useGetPosts from '../../../queries/getPosts';
import BlogList from '../../../components/Blog-list/BlogList';

const Fiteness = () => {
  const { data, loading, error } = useGetPosts(['Fitness'], 10);

  return (
    <section className={style.container}>
      <BlogList
        data={data?.posts}
        loading={loading}
        error={error}
        skeletonNumber={5}
      />
    </section>
  );
};

export default Fiteness;
