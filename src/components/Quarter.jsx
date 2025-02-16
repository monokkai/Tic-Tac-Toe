import React, { useState } from "react";
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
        width: "400px",
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

const Quarter = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  //Всегда начинают ❌ поэтому изначально они будут ходить
  const [player, setPlayer] = useState("❌");
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);

  //На сайте у них было расписано как они определяют эти поля для выигрыша
  const checkWinner = (board) => {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const handleCellClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = player;
    setBoard(newBoard);

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
    } else if (newBoard.every((cell) => cell !== null)) {
      setIsDraw(true);
    } else {
      setPlayer(player === "❌" ? "⭕️" : "❌");
    }
  };

  const restartGame = () => {
    setBoard(Array(9).fill(""));
    setPlayer("❌");
    setWinner(null);
    setIsDraw(false);
  };

  return (
    <QuarterSquare>
      <div>
        <h1>Tic-Tac-Toe</h1>
        <p>Current player: {player}</p>
        <Field board={board} handleCellClick={handleCellClick} />
        {winner && <p>Winner: {winner}</p>}
        {isDraw && <p>It's a draw!</p>}
      </div>
      <FinalizeButton onClick={restartGame} />
    </QuarterSquare>
  );
};

export default Quarter;
