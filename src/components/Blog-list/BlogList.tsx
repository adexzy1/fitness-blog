import { ApolloError } from '@apollo/client';
import { Post } from '../../models/models';
import PostCard from '../PostCard/PostCard';
import PostCardSkeleton from '../skeleton/postcard/PostCardSkeleton';
import style from './blogList.module.css';

interface Props {
  data: Post[];
  loading: boolean;
  error: ApolloError | undefined;
  skeletonNumber: number;
}

const BlogList = ({ data, loading, error, skeletonNumber }: Props) => {
  return (
    <main className={style.blog__list__wrapper}>
      {/* if loading render the skeleton elements */}

      {loading && (
        <>
          {Array.apply(null, new Array(skeletonNumber)).map((n, index) => (
            <PostCardSkeleton key={index} />
          ))}
        </>
      )}

      {/* id error render the error message */}

      {error && <div>An error occured</div>}

      {/* if not loading and no error render the posts */}
      {data && (
        <>
          {data.map((item) => (
            <PostCard key={item.id} item={item} />
          ))}
        </>
      )}
    </main>
  );
};

export default BlogList;
