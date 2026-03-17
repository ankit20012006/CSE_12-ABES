import React, { useState } from "react";

function App() {
  const [status, setStatus] = useState(0);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Arial",
        backgroundColor: "#f4f6ff",
        padding: "40px",
        borderRadius: "10px"
      }}
    >
      <h1 style={{ color: "#4a00e0" }}>User Role Dashboard</h1>

      <button
        onClick={() => setStatus(1)}
        style={{ margin: "10px", padding: "10px 20px", backgroundColor: "#00b894", color: "white", border: "none", borderRadius: "6px" }}
      >
        Student
      </button>

      <button
        onClick={() => setStatus(2)}
        style={{ margin: "10px", padding: "10px 20px", backgroundColor: "#0984e3", color: "white", border: "none", borderRadius: "6px" }}
      >
        Teacher
      </button>

      <button
        onClick={() => setStatus(3)}
        style={{ margin: "10px", padding: "10px 20px", backgroundColor: "#d63031", color: "white", border: "none", borderRadius: "6px" }}
      >
        Admin
      </button>

      <hr />

      {status === 1 ? (
        <div style={{ fontSize: "20px", color: "#00b894" }}>
           Welcome Student! Keep learning and exploring new things.
        </div>
      ) : status === 2 ? (
        <div style={{ fontSize: "20px", color: "#0984e3" }}>
           Welcome Teacher! Guide students and share knowledge.
        </div>
      ) : status === 3 ? (
        <div style={{ fontSize: "20px", color: "#d63031" }}>
           Welcome Admin! Manage the system and users.
        </div>
      ) : (
        <div style={{ fontSize: "18px", color: "#555" }}>
           Please select a role above.
        </div>
      )}
    </div>
  );
}

export default App;