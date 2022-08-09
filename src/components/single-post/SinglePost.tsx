import style from './singlePost.module.css';
import CommentList from './comments/CommentList';
import { Post } from '../../models/models';
import useTimeAgo from '../../hooks/useTimeAgo';

interface Props {
  post: Post;
}

const SinglePost = ({ post }: Props) => {
  // custom hook
  const timeAgo = useTimeAgo(post.createdAt);

  console.log(post.createdAt);
  return (
    <section className={style.container}>
      <div className={style.img__wrapper}>
        <img src={post.coverPhoto.url} alt="cover-pohot" />
      </div>

      <div className={style.author__details}>
        <div className={style.author__details_img}>
          <img src={post.author.displayPicture.url} alt="author" />
        </div>

        <div>
          <h5>{post.author.name}</h5>
          <p>Published {timeAgo} Ago</p>
        </div>
      </div>

      <article className={style.article}>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content.html }} />
      </article>

      <CommentList />
    </section>
  );
};

export default SinglePost;
