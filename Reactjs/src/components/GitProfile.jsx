// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";

// const GitProfile = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     async function gitUser() {
//       const response = await fetch("https://api.github.com/users");
//       const data = await response.json();
//       setUsers(data);
//       // console.log("Rohan Gupta");
//     }

//     gitUser();
//   }, []);

//   return (
//     <div
//       style={{
//         backgroundColor: "#111751",
//         color: "white",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <h1>Shubham Kumar Gupta</h1>

//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           height: "100%",
//           width: "100%",
//           wordWrap: "wrap",
//           alignItems: "center",
//         }}
//       >
//         {users.map((user) => (
//           <img
//             src={user.avatar_url}
//             alt="image"
//             height={"100%"}
//             width={"100%"}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GitProfile;

import React, { useEffect, useState } from "react";

const GitProfile = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function gitUser() {
      try {
        const response = await fetch("https://api.github.com/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    gitUser();
  }, []);

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
