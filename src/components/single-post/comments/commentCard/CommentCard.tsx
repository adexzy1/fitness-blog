import style from './commentCard.module.css';
import { IoPersonCircle } from 'react-icons/io5';
import { GiSelfLove } from 'react-icons/gi';
import { ImBubble } from 'react-icons/im';
import { useState } from 'react';
import CommentBox from '../commentBox/CommentBox';
import { Comments } from '../../../../models/models';

interface Props {
  commentName: string;
  commentMessage: string;
  id: string;
  replies: Comments[];
}

const CommentCard = ({ commentName, commentMessage, id, replies }: Props) => {
  const [showReplyBox, setShowReplyBox] = useState<boolean>(false);
  const [replyName, setReplyName] = useState<string>('');
  const [replyMessage, setReplyMessage] = useState<string>('');
  const [likeCount, setLikeCount] = useState<number>(0);

  console.log(replies);

  const handleReplyBox = () => {
    setShowReplyBox((prev) => !prev);
  };

  const handleTotalReply = () => {
    if (replyName && replyMessage) {
      // push the new reply if the comment key exist
      replies.push({
        name: replyName,
        message: replyMessage,
        id: Date.now().toString(),
        comment_replies: [],
      });

      // clear the reply input box
      setReplyName('');
      setReplyMessage('');
    }
    setShowReplyBox(false);
  };

  const handleLikeCount = () => {
    setLikeCount((prev) => (prev += 1));
  };

  return (
    <>
      <>
        <section className={style.comment__card_container}>
          <div className={style.dummy__avatar}>
            <IoPersonCircle />
          </div>

          <section className={style.comment__details_wrapper}>
            <div className={style.comment__body}>
              <p>
                {commentName}
                <span>Jul4</span>
              </p>
              <p>{commentMessage}</p>
            </div>

            <section className={style.reactions__wrapper}>
              <div onClick={handleLikeCount}>
                <GiSelfLove /> {likeCount} Likes
              </div>

              <div onClick={handleReplyBox}>
                <ImBubble /> Reply
              </div>
            </section>
          </section>
        </section>

        {replies && (
          <div className={style.comment_reply_wrapper}>
            {replies.map((item) => (
              <CommentCard
                key={item.id}
                commentName={item.name}
                commentMessage={item.message}
                id={item.id}
                replies={item.comment_replies}
              />
            ))}
          </div>
        )}
      </>

      {/* comment box for sending a reply to a comment  */}
      {showReplyBox && (
        <CommentBox
          btnText="Reply"
          cancelText="Cancel"
          handleReplyBox={handleReplyBox}
          name={replyName}
          message={replyMessage}
          setMessage={setReplyMessage}
          setName={setReplyName}
          handleComment={handleTotalReply}
        />
      )}
    </>
  );
};
export default CommentCard;
