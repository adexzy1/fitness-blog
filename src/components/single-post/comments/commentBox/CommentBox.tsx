import { FormEvent } from 'react';
import Button from '../../../button/Button';
import style from './commentBox.module.css';

interface Props {
  btnText: string;
  cancelText?: string;
  handleReplyBox?: () => void;
  name: string;
  message: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  handleComment: () => void;
}

const CommentBox = (props: Props) => {
  // destructured props
  const {
    btnText,
    cancelText,
    handleReplyBox,
    name,
    message,
    setName,
    setMessage,
    handleComment,
  } = props;

  // disable button if name and message field is empty
  const disAbled = name && message ? false : true;

  // function to submit comment
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    handleComment();
  };

  return (
    <form className={style.commentBox__container} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <textarea
        rows={10}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <Button text={btnText} disable={disAbled} />

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
