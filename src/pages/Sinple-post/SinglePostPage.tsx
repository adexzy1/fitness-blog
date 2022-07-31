import RelatedPosts from '../../components/RelatedPosts/RelatedPosts';
import SinglePost from '../../components/single-post/SinglePost';
import useGetSinglePost from '../../queries/getSinglePost';
import style from './singlePostPage.module.css';
import { useParams } from 'react-router-dom';

const SinglePostPage = () => {
  // React-router hook
  const { slug } = useParams();

  // GraphQl Query hook
  const { loading, data, error } = useGetSinglePost(slug!);

  // function to render al posts
  const renderPosts = () => {
    if (loading) {
      return <div>loading....</div>;
    } else if (error) {
      return <div>an error occured</div>;
    } else {
      return <SinglePost post={data?.post} />;
    }
  };

  return (
    <section className={style.container}>
      <main>{renderPosts()}</main>

      <aside>
        <RelatedPosts category={data?.post.category} id={data?.post.id} />
      </aside>
    </section>
  );
};

export default SinglePostPage;
