import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const GitProfile = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function gitUser() {
      const response = await fetch("https://api.github.com/users");
      const data = await response.json();
      setUsers(data);
      // console.log("Rohan Gupta");
    }

    gitUser();
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#111751",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Shubham Kumar Gupta</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100%",
          width: "100%",
          wordWrap: "wrap",
          alignItems: "center",
        }}
      >
        {users.map((user) => (
          <img
            src={user.avatar_url}
            alt="image"
            height={"100%"}
            width={"100%"}
          />
        ))}
      </div>
    </div>
  );
};

export default GitProfile;
