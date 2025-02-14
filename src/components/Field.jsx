import React from "react";
import styled from "styled-components";
import FieldsArray from "./FieldsArray";

const PlayerField = ({ children }) => {
  return (
    <div
      className="wrapper"
      style={{
        padding: "5px",
        flexWrap: "wrap",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "6px",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {children}
    </div>
  );
};

const Field = (props) => {
  return (
    <PlayerField>
      <FieldsArray />
    </PlayerField>
  );
};

export default Field;
