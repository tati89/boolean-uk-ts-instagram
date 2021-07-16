import React from "react";

type FormCommentProps = {
  submitComment: () => void;
};

function Form({ submitComment }: FormCommentProps) {
  return (
    <form onSubmit={submitComment} id="create-comment-form" autoComplete="off">
      <label htmlFor="comment">Add comment</label>
      <input id="comment" name="comment" type="text" />
      <button type="submit">Comment</button>
    </form>
  );
}

export default Form;
