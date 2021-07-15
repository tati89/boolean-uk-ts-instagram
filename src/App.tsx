import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./styles/index.css";
import "./styles/reset.css";

function App() {
  type User = {
    id: number;
    username: string;
    avatar: string;
  };

  type Users = {
    id: number;
    username: string;
    avatar: string;
  }[];
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <>
      <div id="root">
        <Header users={users} selectedUser={selectedUser} />
        <Main />
      </div>
    </>
  );
}

export default App;
