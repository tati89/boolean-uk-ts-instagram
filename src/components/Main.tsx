import React, { SyntheticEvent } from "react";
import CreatePostSection from "./CreatePostSection";
import Feed from "./Feed";
import { Users } from "../App";
import { User } from "../App";
import { Posts } from "../App";

type MainProps = {
  users: Users;
  selectedUser: User;
  posts: Posts;
  submitComment: (e: SyntheticEvent) => string;
};

function Main({ users, selectedUser, posts, submitComment }: MainProps) {
  return (
    <main className="wrapper">
      <CreatePostSection />
      <Feed
        users={users}
        selectedUser={selectedUser}
        posts={posts}
        submitComment={submitComment}
      />
    </main>
  );
}

export default Main;
