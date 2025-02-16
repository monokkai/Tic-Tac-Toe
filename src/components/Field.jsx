import FieldsArray from "./FieldsArray";
import React from "react";

const PlayerField = ({ children }) => {
  return (
    <div
      className="wrapper"
      style={{
        padding: "5px",
        flexWrap: "wrap",
        display: "flex",
        flexDirection: "row",
        gap: "6px",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {children}
    </div>
  );
};

const Field = ({ board, handleCellClick }) => {
  return (
    <PlayerField>
      <FieldsArray board={board} handleCellClick={handleCellClick} />
    </PlayerField>
  );
};

export default Field;
