import React from "react";
import styled from "styled-components";

const StyledCell = styled.div`
  border: 0;
  border-radius: 8px;
  background-color:rgb(245, 245, 245);
  transition: all 0.3s ease-in-out;
  scale: 1;
  display: grid;
  flex-direction: row;
  gap: 6px;
  width: 32%;
  height: 70px;
  cursor: pointer;
  align-items: center;
  marign: 0 auto;

  &:hover {
    scale: 1.05;
  }
`;

const FieldsArray = () => {
  return (
    <div
      style={{
        padding: "5px",
        flexWrap: "wrap",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "6px",
        width: "100%",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <StyledCell>
        <div>&nbsp;</div>
      </StyledCell>
      <StyledCell>
        <div>&nbsp;</div>
      </StyledCell>
      <StyledCell>
        <div>&nbsp;</div>
      </StyledCell>
      <StyledCell>
        <div>&nbsp;</div>
      </StyledCell>
      <StyledCell>
        <div>&nbsp;</div>
      </StyledCell>
      <StyledCell>
        <div>&nbsp;</div>
      </StyledCell>
      <StyledCell>
        <div>&nbsp;</div>
      </StyledCell>
      <StyledCell>
        <div>&nbsp;</div>
      </StyledCell>
      <StyledCell>
        <div>&nbsp;</div>
      </StyledCell>
    </div>
  );
};

export default FieldsArray;
