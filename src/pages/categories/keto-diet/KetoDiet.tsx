import RelatedPosts from '../../../components/RelatedPosts/RelatedPosts';
import useGetPosts from '../../../queries/getPosts';
import RenderBlogList from '../../../components/utils/RenderBlogList';
import style from '../categories.module.css';

const KetoDiet = () => {
  const { data, loading, error } = useGetPosts(['KetoDiet'], 10);

  return (
    <section className={style.container}>
      <>{RenderBlogList({ data, loading, error })}</>

      {/* <aside>
        <RelatedPosts />
      </aside> */}
    </section>
  );
};

export default KetoDiet;
