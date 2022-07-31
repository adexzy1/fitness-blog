import useGetPosts from '../../../queries/getPosts';
import RenderBlogList from '../../../components/utils/RenderBlogList';
import style from '../categories.module.css';

const Nutrition = () => {
  const { data, loading, error } = useGetPosts(['Nutrition'], 10);

  return (
    <section className={style.container}>
      {RenderBlogList({ data, loading, error })}
    </section>
  );
};

export default Nutrition;
