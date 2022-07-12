import RelatedPosts from '../../components/RelatedPosts/RelatedPosts';
import SinglePost from '../../components/single-post/SinglePost';
import style from './singlePostPage.module.css';

const SinglePostPage = () => {
  return (
    <section className={style.container}>
      <main>
        <SinglePost />
      </main>

      <aside>
        <RelatedPosts />
      </aside>
    </section>
  );
};

export default SinglePostPage;
