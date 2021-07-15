import React from "react";
type HeadeProps = {
  users: User[] | null;
  electedUser: User | null;
};

function Header({ users, selectedUser }) {
  return (
    <header className="main-header">
      <div className="wrapper">
        {users.map((user) => (
          <div
            key={user.username}
            className={selectedUser ? "chip active" : "chip"}
          >
            <div className="avatar-small">
              <img src={user.avatar} alt={user.username} />
            </div>
            <span>{user.username}</span>
          </div>
        ))}
      </div>
    </header>
  );
}

export default Header;
