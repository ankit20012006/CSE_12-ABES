import React from "react";
import Student from "./Student";

function App() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        backgroundColor: "#f4f6ff",
        padding: "40px",
        fontFamily: "Arial"
      }}
    >
      <h1 style={{ color: "#4a00e0" }}>Student Information</h1>

      <Student name="John Doe" age={20} />
      <Student name="Amit Sharma" age={22} />
    </div>
  );
}

export default App;