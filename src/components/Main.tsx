import React, { SyntheticEvent } from "react";
import CreatePostSection from "./CreatePostSection";
import Feed from "./Feed";
import { Users } from "../App";
import { User } from "../App";
import { Posts } from "../App";
import { Comments } from "../App";

type MainProps = {
  users: Users;
  selectedUser: User;
  posts: Posts;
  comments: Comments;
  setComments: () => void;
};

function Main({
  users,
  selectedUser,
  posts,
  comments,
  setComments,
}: MainProps) {
  return (
    <main className="wrapper">
      <CreatePostSection />
      <Feed
        users={users}
        selectedUser={selectedUser}
        posts={posts}
        comments={comments}
        setComments={setComments}
      />
    </main>
  );
}

export default Main;
