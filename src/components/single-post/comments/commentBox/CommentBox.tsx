import { FormEvent } from 'react';
import { Comments } from '../../../../models/models';
import Button from '../../../button/Button';
import style from './commentBox.module.css';

interface Props {
  btnText: string;
  cancelText?: string;
  handleReplyBox?: () => void;
  comment: Comments;
  setComment: React.Dispatch<React.SetStateAction<Comments>>;
  handleComment: () => void;
}

const CommentBox = (props: Props) => {
  // pdestructured props
  const {
    btnText,
    cancelText,
    handleReplyBox,
    comment,
    setComment,
    handleComment,
  } = props;

  // change the button state when the comment box state changes
  const disableBtn = comment ? false : true;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleComment();
  };

  return (
    <form className={style.commentBox__container} onSubmit={handleSubmit}>
      <input
        type="text"
        value={comment.name}
        placeholder="Enter your name"
        required
        onChange={(e) => setComment({ ...comment, name: e.target.value })}
      />

      <textarea
        rows={10}
        onChange={(e) => setComment({ ...comment, message: e.target.value })}
        value={comment.message}
      />

      <Button text={btnText} disable={disableBtn} />

      {cancelText && (
        <button
          onClick={handleReplyBox}
          type="button"
          className={style.cancel__Btn}
        >
          {cancelText}
        </button>
      )}
    </form>
  );
};

export default CommentBox;
