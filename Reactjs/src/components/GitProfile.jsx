import React, { useEffect, useState } from "react";

const GitProfile = () => {
  const [users, setUsers] = useState([]);
  const [display, setDisplay] = useState(30);

  useEffect(() => {
    async function gitUser() {
      try {
        const response = await fetch(
          `https://api.github.com/users?per_page=${display}`,
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    gitUser();
  }, [display]);

  function inputchange(e) {
    setDisplay(e.target.value);
  }

  return (
    <div
      style={{
        backgroundColor: "#111751",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1>Shubham Kumar Gupta</h1>

      <input type="number" value={display} onChange={inputchange} />

      {/* Grid container for users */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {users.map((user) => (
          <div
            key={user.id} // Unique key zaroori hai
            style={{
              border: "1px solid #333",
              borderRadius: "8px",
              padding: "10px",
              backgroundColor: "#1a2268",
              width: "150px", // Fixed width card
            }}
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              style={{
                width: "150px", // Proper size
                height: "150px",
                borderRadius: "50%", // Round avatar
                objectFit: "cover",
              }}
            />
            <p style={{ marginTop: "8px", fontSize: "14px" }}>{user.login}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GitProfile;
