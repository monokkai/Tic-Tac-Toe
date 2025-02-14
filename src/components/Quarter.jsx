import React from "react";
import Field from "./Field";
import FinalizeButton from "./FinalizeButton";

const QuarterSquare = ({ children }) => {
  return (
    <div
      className="wrapper"
      style={{
        border: "1px solid lightgray",
        borderRadius: "20px",
        padding: "15px",
        transition: "all 0.3s ease-in-out",
        scale: 1,
        boxShadow: "1px solid gray",
        width: "50%",
        margin: "0 auto",
        fontFamily: "FreeMono, monospace",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};

const Quarter = (props) => {
  return (
    <QuarterSquare>
      <div>
        <h1>Tic-Tac-Toe</h1>
        <p>Current player: {props.player}</p>
        <Field />
      </div>
      <FinalizeButton />
    </QuarterSquare>
  );
};

export default Quarter;
