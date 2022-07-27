import RelatedPosts from '../../../components/RelatedPosts/RelatedPosts';
import style from '../categories.module.css';
import useGetPosts from '../../../queries/getPosts';
import RenderBlogList from '../../../components/utils/RenderBlogList';

const Fiteness = () => {
  const { data, loading, error } = useGetPosts(['Fitness'], 10);

  return (
    <section className={style.container}>
      <>{RenderBlogList({ data, loading, error })}</>

      {/* <aside>
        <RelatedPosts />
      </aside> */}
    </section>
  );
};

export default Fiteness;
