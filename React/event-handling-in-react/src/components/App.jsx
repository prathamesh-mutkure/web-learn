import React, { useState } from "react";

function App() {

  const [title, setTitle] = useState("Hello")

  function updateTitle() {
    setTitle("Submitted")
  }

  const [isMouseOver, setMouseOver] = useState(false)

  function handleMouseOver() {
    setMouseOver(true)
  }

  function handleMouseOut() {
    setMouseOver(false)
  }

  return (
    <div className="container">
      <h1>{title}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style = { isMouseOver ? {backgroundColor: "black", color: "white"} : null  }
        onClick={updateTitle}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
