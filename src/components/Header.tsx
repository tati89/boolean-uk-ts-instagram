import React from "react";
import { Users } from "../App";
import { User } from "../App";

type HeaderProps = {
  users: Users;
  selectedUser: User;
  changeUser: (arg: User) => User;
};

function Header({ users, selectedUser, changeUser }: HeaderProps) {
  return (
    <header className="main-header">
      <div className="wrapper">
        {users.map((user) => (
          <button
            key={user.username}
            onClick={() => changeUser(user)}
            className={selectedUser === user ? "chip active" : "chip"}
          >
            <div className="avatar-small">
              <img src={user.avatar} alt={user.username} />
            </div>
            <span>{user.username}</span>
          </button>
        ))}
      </div>
    </header>
  );
}

export default Header;
