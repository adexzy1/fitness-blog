import { useState } from 'react';
import CommentBox from './commentBox/CommentBox';
import CommentCard from './commentCard/CommentCard';
import { Comments } from '../../../models/models';
import style from './commentList.module.css';

const CommentList = () => {
  // state
  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [totalComments, setTotalComments] = useState<Comments[]>([]);

  const handleTotalComments = () => {
    setTotalComments([
      { name, message, id: Date.now().toString(), comment_replies: [] },
      ...totalComments,
    ]);
  };

  return (
    <section className={style.comment__container}>
      <h5>Comment ({totalComments.length})</h5>
      <CommentBox
        btnText="Submit"
        name={name}
        message={message}
        setName={setName}
        setMessage={setMessage}
        handleComment={handleTotalComments}
      />

      {totalComments.length > 0 && (
        <>
          {totalComments.map((item) => (
            <CommentCard
              key={item.id}
              commentName={item.name}
              commentMessage={item.message}
              id={item.id}
              replies={item.comment_replies}
            />
          ))}
        </>
      )}
    </section>
  );
};

export default CommentList;
