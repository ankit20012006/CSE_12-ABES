import React from "react";

function Student(props) {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "20px",
        margin: "20px auto",
        width: "250px",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.1)"
      }}
    >
      <h2 style={{ color: "#0984e3" }}>Name: {props.name}</h2>
      <h3 style={{ color: "#00b894" }}>Age: {props.age}</h3>
      <p style={{ color: "#555" }}>
         A passionate student who is learning React.
      </p>
    </div>
  );
}

export default Student;