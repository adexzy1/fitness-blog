import RelatedPosts from '../../components/RelatedPosts/RelatedPosts';
import SinglePost from '../../components/single-post/SinglePost';
import useGetSinglePost from '../../queries/getSinglePost';
import style from './singlePostPage.module.css';
import { useParams } from 'react-router-dom';
import SinglePostSkeleton from '../../components/skeleton/singlePost/SinglePostSkeleton';

const SinglePostPage = () => {
  // React-router hook
  const { slug } = useParams();

  // GraphQl Query hook
  const { loading, data, error } = useGetSinglePost(slug!);

  return (
    <section className={style.container}>
      {loading && <SinglePostSkeleton />}

      {error && <div>an error occured</div>}

      <main> {data && <SinglePost post={data?.post} />}</main>

      <aside>
        <RelatedPosts category={data?.post.category} id={data?.post.id} />
      </aside>
    </section>
  );
};

export default SinglePostPage;
