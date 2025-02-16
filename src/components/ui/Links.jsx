import React from "react";

const Links = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <a
        style={{ cursor: "pointer", scale: 0.7 }}
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      >
        🔴
      </a>
      <a
        style={{ cursor: "pointer", scale: 0.7 }}
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      >
        🟠
      </a>
      <a
        style={{ cursor: "pointer", scale: 0.7 }}
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      >
        🟢
      </a>
    </div>
  );
};

export default Links;
