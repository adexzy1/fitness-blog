import { ApolloError } from '@apollo/client';
import BlogList from '../Blog-list/BlogList';
import { Post } from '../../models/models';
import PostCardSkeleton from '../skeleton/postcard/PostCardSkeleton';

interface Params {
  error: ApolloError | undefined;
  loading: boolean;
  data: { posts: Post[] };
}

const RenderBlogList = ({ error, loading, data }: Params) => {
  const skeleton = [1, 2, 3, 4, 5];

  if (loading) {
    return (
      <>
        {skeleton.map((n) => (
          <PostCardSkeleton key={n} />
        ))}
      </>
    );
  } else if (error) {
    return <div>An error occured</div>;
  } else {
    // return <BlogList data={data.posts} />;
  }
};

export default RenderBlogList;
