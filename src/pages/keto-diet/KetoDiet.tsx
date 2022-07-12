import BlogList from '../../components/Blog-list/BlogList';
import RelatedPosts from '../../components/RelatedPosts/RelatedPosts';
import style from './ketoDiet.module.css';

const KetoDiet = () => {
  const items: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <section className={style.container}>
      <BlogList data={items} />

      <aside>
        <RelatedPosts />
      </aside>
    </section>
  );
};

export default KetoDiet;