import RelatedPostCard from './Related-post-card/RelatedPostCard';
import style from './relatedPosts.module.css';

const RelatedPosts = () => {
  return (
    <aside className={style.container}>
      <h4>Related Posts</h4>

      <section>
        <RelatedPostCard />
        <RelatedPostCard />
        <RelatedPostCard />
        <RelatedPostCard />
        <RelatedPostCard />
      </section>
    </aside>
  );
};

export default RelatedPosts;
