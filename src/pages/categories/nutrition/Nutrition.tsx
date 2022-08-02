import useGetPosts from '../../../queries/getPosts';
import style from '../categories.module.css';
import BlogList from '../../../components/Blog-list/BlogList';

const Nutrition = () => {
  const { data, loading, error } = useGetPosts(['Nutrition'], 10);

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

export default Nutrition;
