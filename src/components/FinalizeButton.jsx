import React, { useState } from "react";
import styled from "styled-components";

const StyledFinalizeButton = styled.button`
  background-color: #7cb9e8;
  color: white;
  transition: all 0.3s ease-in-out;
  scale: 1;
  margin: 0 auto;
  width: 70%;
  border: 0;
  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    scale: 1.1;
    background-color: rgb(111, 186, 243);
  }
`;

const FinalizeButton = () => {
  return (
    <StyledFinalizeButton onClick={() => (window.location.href = "/")}>
      Restart Game
    </StyledFinalizeButton>
  );
};

export default FinalizeButton;
