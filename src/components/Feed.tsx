import React, { useState } from "react";
import { Users } from "../App";
import { User } from "../App";
import { Posts } from "../App";
import Form from "./Form";

type FeedProps = {
  users: Users;
  selectedUser: User;
  posts: Posts;
  submitComment: () => void;
};

function Feed({ users, selectedUser, posts, submitComment }: FeedProps) {
  let userPosts: Posts = [];
  if (selectedUser !== null) {
    userPosts = posts.filter((post) => post.userId === selectedUser.id);
  }

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
              <Form submitComment={submitComment} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Feed;
