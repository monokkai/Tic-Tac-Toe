import React, { useState } from "react";
import Field from "./Field";
import FinalizeButton from "./FinalizeButton";
import styled from "styled-components";

const StyledStartButton = styled.button`
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
  margin-top: 40px;

  &:hover {
    scale: 1.1;
    background-color: rgb(111, 186, 243);
  }
`;

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
  const [player, setPlayer] = useState(null);
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [playerX, setPlayerX] = useState("");
  const [playerO, setPlayerO] = useState("");

  //На сайте у них было расписано как они определяют эти поля для выигрыша
  //Сам массив в комбинациях этих ❌ ⭕️
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
    // Проверка на занятость клетки
    if (board[index] || winner) {
      return;
    }

    // Сделал как вы показывали через ... что бы сохранить шаблон старых клеток
    const newBoard = [...board];
    // По индексу берем игрока на поле
    newBoard[index] = player;
    setBoard(newBoard);

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
    } else if (newBoard.every((cell) => cell !== null)) {
      // Если все поля есть но значит они 100% не null
      setIsDraw(true);
    } else {
      setPlayer(player === "❌" ? "⭕️" : "❌");
    }
  };

  const restartGame = () => {
    setBoard(Array(9).fill(""));
    setPlayer("");
    setWinner("");
    setIsDraw(false);
    setGameStarted(false);
    setPlayerX("");
    setPlayerO("");
  };

  const handleStartGame = () => {
    if (playerX && playerO) {
      setGameStarted(true);
      setPlayer("❌");
    }
  };

  return (
    <QuarterSquare>
      <div>
        <h1>Tic-Tac-Toe</h1>
        {!gameStarted ? (
          <div style={{ alignItems: "center" }}>
            <p>Enter to play: </p>
            <div style={{ alignItems: "center" }}>
              <label>
                Игрок ❌:
                <input
                  type="text"
                  value={playerX}
                  onChange={(e) => setPlayerX(e.target.value)}
                  placeholder="Enter the name"
                  style={{
                    padding: "10px",
                    borderRadius: "10px",
                    border: 0,
                    alignItems: "center",
                  }}
                />
              </label>
            </div>
            <div>
              <label>
                Игрок ⭕️:
                <input
                  type="text"
                  value={playerO}
                  onChange={(e) => setPlayerO(e.target.value)}
                  placeholder="Enter the name"
                  style={{
                    padding: "10px",
                    borderRadius: "10px",
                    border: 0,
                    alignItems: "center",
                  }}
                />
              </label>
            </div>
            <StyledStartButton onClick={handleStartGame}>
              Sart Game
            </StyledStartButton>
          </div>
        ) : (
          <div>
            <p>
              Current Player: {player === "❌" ? playerX : playerO} ({player})
            </p>
            <Field board={board} handleCellClick={handleCellClick} />
            {winner && (
              <p>
                Winner: {winner === "❌" ? playerX : playerO} ({winner})
              </p>
            )}
            {isDraw && <p>It's a draw!</p>}
          </div>
        )}
      </div>
      {gameStarted && <FinalizeButton onClick={restartGame} />}
    </QuarterSquare>
  );
};

export default Quarter;
