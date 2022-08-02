import useGetPosts from '../../../queries/getPosts';
import style from '../categories.module.css';
import BlogList from '../../../components/Blog-list/BlogList';

const KetoDiet = () => {
  const { data, loading, error } = useGetPosts(['KetoDiet'], 10);

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

export default KetoDiet;
