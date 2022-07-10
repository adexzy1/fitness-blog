import { useState } from 'react';
import CommentBox from './commentBox/CommentBox';
import CommentCard from './commentCard/CommentCard';
import { Comments } from '../../../models/models';
import style from './commentList.module.css';

const CommentList = () => {
  // state
  const [comment, setComment] = useState<Comments>({
    name: '',
    message: '',
  });
  const [totalComments, setTotalComments] = useState<Comments[]>([]);
  const commentCount = totalComments.length;

  const handleTotalComments = () => {
    if (comment) {
      setTotalComments([{ ...comment }, ...totalComments]);
    }
    setComment({
      name: '',
      message: '',
    });
  };

  return (
    <section className={style.comment__container}>
      <h5>Comment ({commentCount})</h5>
      <CommentBox
        btnText="Submit"
        comment={comment}
        setComment={setComment}
        handleComment={handleTotalComments}
      />

      {totalComments.length > 0 && (
        <>
          {totalComments.map((item, index) => (
            <CommentCard
              key={index}
              commentName={item.name}
              commentMessage={item.message}
            />
          ))}
        </>
      )}
    </section>
  );
};

export default CommentList;
