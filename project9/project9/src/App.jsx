import React, { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  const toggleContent = () => {
    setShow(!show);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Arial",
        backgroundColor: "#f0f8ff",
        padding: "40px",
        borderRadius: "10px"
      }}
    >
      <h1 style={{ color: "#4a00e0" }}>React Toggle Demo</h1>

      <button
        onClick={toggleContent}
        style={{
          backgroundColor: show ? "#ff4b5c" : "#00c853",
          color: "white",
          border: "none",
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        {show ? "Hide Message" : "Show Message"}
      </button>

      {show && (
        <p
          style={{
            marginTop: "20px",
            fontSize: "18px",
            color: "#333",
            backgroundColor: "#ffffff",
            padding: "15px",
            borderRadius: "8px",
            boxShadow: "0px 2px 10px rgba(0,0,0,0.1)"
          }}
        >
           Welcome to React! This small demo shows how we can use the
          useState hook to toggle content on the screen. React makes building
          interactive user interfaces simple and powerful.
        </p>
      )}
    </div>
  );
}

export default App;