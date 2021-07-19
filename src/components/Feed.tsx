import React, { SyntheticEvent, useState } from "react";
import { Users } from "../App";
import { User } from "../App";
import { Posts } from "../App";
import { Comments } from "../App";
import { Comment } from "../App";

type Post = {
  id: number;
  title: string;
  content: string;
  image: {
    src: string;
    alt: string;
  };
  likes: number;
  userId: number;
  comments: {
    id: number;
    content: string;
    userId: number;
    postId: number;
  };
};

type Comment = {
  id: number;
  content: string;
  userId: number;
  postId: number;
};

type FeedProps = {
  users: Users;
  selectedUser: User;
  posts: Posts;
  comments: Comments;
  setComments: (arg: Comment[]) => void;
};

function Feed({
  users,
  selectedUser,
  posts,
  comments,
  setComments,
}: FeedProps) {
  const [inputComment, setInputComment] = useState<string | null | undefined>(
    ""
  );

  let userPosts: Posts = [];
  if (selectedUser !== null) {
    userPosts = posts.filter((post) => post.userId === selectedUser.id);
  }

  const submitHandler = (
    event: React.ChangeEvent<HTMLFormElement>,
    post: Post
  ) => {
    event.preventDefault();

    const comment = {
      content: inputComment,
      userId: selectedUser?.id,
      postId: post.id,
    };

    fetch("http://localhost:4000/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    })
      .then(function (response) {
        return response.json();
      })
      .then((comment) => setComments([...comments, comment]));

    event.target.reset();
  };

  return (
    <section className="feed">
      <ul className="stack">
        {userPosts.map((post) => (
          <li key={post.id} className="post">
            <div className="chip active">
              <div className="avatar-small">
                <img src={selectedUser?.avatar} alt={selectedUser?.username} />
              </div>
              <span>{selectedUser?.username}</span>
            </div>
            <div className="post--image">
              <img src={post.image.src} alt={post.title} />
            </div>
            <div className="post--content">
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </div>
            <div className="post--comments">
              <h3>Comments</h3>
              {post.comments.map((comment) => {
                let user = users.find((user) => user.id === comment.userId);
                return (
                  <div key={comment.id} className="post--comment">
                    <div className="avatar-small">
                      <img src={user?.avatar} alt={user?.username} />
                    </div>
                    <p>{comment.content}</p>
                  </div>
                );
              })}
              <form
                onSubmit={(e) => submitHandler(e, post)}
                id="create-comment-form"
                autoComplete="off"
              >
                <label htmlFor="comment">Add comment</label>
                <input
                  onChange={(e) => setInputComment(e.target.value)}
                  id="comment"
                  name="comment"
                  type="text"
                />
                <button type="submit">Comment</button>
              </form>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Feed;
