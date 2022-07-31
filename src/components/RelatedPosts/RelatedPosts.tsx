import { useEffect, useState } from 'react';
import { Post } from '../../models/models';
import useGetRelatedPosts from '../../queries/getRelatedPosts';
import RelatedPostCard from './Related-post-card/RelatedPostCard';
import style from './relatedPosts.module.css';

interface Props {
  category: string[];
  id: string;
}

const RelatedPosts = ({ category, id }: Props) => {
  const [relatedPosts, setRelatedPosts] = useState<Post[] | null>(null);

  // custom hook
  const { data, error, loading } = useGetRelatedPosts(category, 5);

  // filter data from api
  useEffect(() => {
    if (data) {
      const filteredData = data.posts.filter((x: Post) => x.id !== id);
      setRelatedPosts(filteredData);
    }
  }, [data, id]);

  return (
    <aside className={style.container}>
      <h4>Related Posts</h4>

      <section>
        {loading && <div>Loading...</div>}

        {error && <div>An Error Occured</div>}

        {data && (
          <>
            {relatedPosts?.map((item: Post) => (
              <RelatedPostCard key={item.id} item={item} />
            ))}
          </>
        )}
      </section>
    </aside>
  );
};

export default RelatedPosts;
