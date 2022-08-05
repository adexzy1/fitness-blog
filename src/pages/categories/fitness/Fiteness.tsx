import style from '../categories.module.css';
import useGetPosts from '../../../queries/getPosts';
import BlogList from '../../../components/Blog-list/BlogList';
import TabTitle from '../../../utils/TabTitle';

const Fiteness = () => {
  const { data, loading, error } = useGetPosts(['Fitness'], 10);
  // function to set page title
  TabTitle('Fitness - WorkOut & believe in yourself');

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
