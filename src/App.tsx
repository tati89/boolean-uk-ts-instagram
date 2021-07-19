import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./styles/index.css";
import "./styles/reset.css";
import { SyntheticEvent } from "react";

export type User = {
  id: number;
  username: string;
  avatar: string;
} | null;

export type Users = {
  id: number;
  username: string;
  avatar: string;
}[];

export type Posts = {
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
  }[];
}[];

export type Comment = {
  id: number;
  content: string;
  userId: number;
  postId: number;
};

export type Comments = {
  id: number;
  content: string;
  userId: number;
  postId: number;
}[];

function App() {
  const [users, setUsers] = useState<Users>([]);
  const [posts, setPosts] = useState<Posts>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [selectedUser, setSelectedUser] = useState<User>(null);

  function changeUser(user: User) {
    setSelectedUser(user);
  }

  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));

    fetch("http://localhost:4000/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));

    fetch("http://localhost:4000/comments")
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, []);

  return (
    <>
      <div id="root">
        <Header
          users={users}
          selectedUser={selectedUser}
          changeUser={changeUser}
        />
        <Main
          users={users}
          selectedUser={selectedUser}
          posts={posts}
          comments={comments}
          setComments={setComments}
        />
      </div>
    </>
  );
}

export default App;
