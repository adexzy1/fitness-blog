import { ApolloError } from '@apollo/client';
import BlogList from '../Blog-list/BlogList';
import { Post } from '../../models/models';

interface Params {
  error: ApolloError | undefined;
  loading: boolean;
  data: { posts: Post[] };
}

const RenderBlogList = ({ error, loading, data }: Params) => {
  if (loading) {
    return <div>"loading..."</div>;
  } else if (error) {
    return <div>An error occured</div>;
  } else {
    return <BlogList data={data.posts} />;
  }
};

export default RenderBlogList;
