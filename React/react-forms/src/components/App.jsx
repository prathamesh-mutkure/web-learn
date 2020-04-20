import React, { useState } from "react";

function App() {

  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState("")

  function updateName(event) {
    setName(event.target.value)
  }

  function updateDisplayName(event) {
    setDisplayName(name)

    // Prevents the default action after submitting the form
    // i.e. making a post request
    event.preventDefault()
  }

  return (
    <div className="container">
      <h1>Hello {displayName}</h1>
      <form>
        <input
          type="text"
          placeholder="What's your name?"
          value={name}
          onChange={updateName} />
        <button type="submit" onClick={updateDisplayName}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
