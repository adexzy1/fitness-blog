import { Post } from '../../models/models';
import useGetRelatedPosts from '../../queries/getRelatedPosts';
import RelatedPostSkeleton from '../skeleton/ReletedPost/RelatedPostSkeleton';
import RelatedPostCard from './Related-post-card/RelatedPostCard';
import style from './relatedPosts.module.css';

interface Props {
  category: string[];
  id: string;
}

const RelatedPosts = ({ category, id }: Props) => {
  // custom hook
  const { data, error, loading } = useGetRelatedPosts(category, 5);

  const skeleton = [1, 2, 3, 4];

  return (
    <aside className={style.container}>
      <h4>Related Posts</h4>

      <section>
        {loading && (
          <>
            {skeleton.map((n) => (
              <RelatedPostSkeleton key={n} />
            ))}
          </>
        )}

        {error && <div>An Error Occured</div>}

        {data && (
          <>
            {data.posts
              .filter((x: Post) => x.id !== id)
              .map((item: Post) => (
                <RelatedPostCard key={item.id} item={item} />
              ))}
          </>
        )}
      </section>
    </aside>
  );
};

export default RelatedPosts;
