import RelatedPosts from '../../components/RelatedPosts/RelatedPosts';
import SinglePost from '../../components/single-post/SinglePost';
import useGetSinglePost from '../../queries/getSinglePost';
import style from './singlePostPage.module.css';
import { useParams } from 'react-router-dom';
import useTimeAgo from '../../hooks/useTimeAgo';

const SinglePostPage = () => {
  // React-router hook
  const { slug } = useParams();

  // GraphQl Query hook
  const { loading, data, error } = useGetSinglePost(slug!);
  // console.log(data.post.category);

  // custom Hook
  const { timeAgo } = useTimeAgo(data?.post.createdAt);

  // function to render al posts
  const renderPosts = () => {
    if (loading) {
      return <div>loading....</div>;
    } else if (error) {
      return <div>an error occured</div>;
    } else {
      return (
        <SinglePost
          coverPhoto={data.post.coverPhoto.url}
          title={data.post.title}
          content={data.post.content.html}
          authorAvatar={data.post.author.displayPicture.url}
          authorName={data.post.author.name}
          datePublished={timeAgo()}
        />
      );
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
