import useGetPosts from '../../../queries/getPosts';
import style from '../categories.module.css';
import BlogList from '../../../components/Blog-list/BlogList';
import TabTitle from '../../../utils/TabTitle';

const KetoDiet = () => {
  const { data, loading, error } = useGetPosts(['KetoDiet'], 10);

  // function to set page title
  TabTitle('Keto Diet - believe in yourself');

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
