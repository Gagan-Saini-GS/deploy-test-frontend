import React, { useEffect, useState } from "react";

function Feed() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/findAllUsers")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users);
      });
  }, []);

  return (
    <div className="feed-container">
      {users.length !== 0 ? (
        users.map((user, index) => {
          return (
            <div key={index} className="usercard">
              <h2 className="username">{user.username}</h2>
              <p className="useremail">{user.useremail}</p>
            </div>
          );
        })
      ) : (
        <h1>No users</h1>
      )}
    </div>
  );
}

export default Feed;
