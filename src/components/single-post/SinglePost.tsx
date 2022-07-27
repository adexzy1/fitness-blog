import style from './singlePost.module.css';
import CommentList from './comments/CommentList';

interface Props {
  coverPhoto: string;
  title: string;
  content: string;
  authorAvatar: string;
  authorName: string;
  datePublished: string;
}

const SinglePost = (props: Props) => {
  const {
    coverPhoto,
    title,
    content,
    authorAvatar,
    authorName,
    datePublished,
  } = props;

  return (
    <section className={style.container}>
      <div className={style.img__wrapper}>
        <img src={coverPhoto} alt="cover-pohot" />
      </div>

      <div className={style.author__details}>
        <div className={style.author__details_img}>
          <img src={authorAvatar} alt="author" />
        </div>

        <div>
          <h5>{authorName}</h5>
          <p>Published {datePublished} Ago</p>
        </div>
      </div>

      <article className={style.article}>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </article>

      <CommentList />
    </section>
  );
};

export default SinglePost;
