import React, { useState } from "react";

function App() {

  let [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  })

  function HandleChange(event) {
    
    const [name, value] = event.target

    setFullName(prevValue => {
      
      if (name === 'fName') {
        return {
          fName: value,
          lName: prevValue.lName
        }
      } else if (name === 'lName') {
        return {
          fName: prevValue.fName,
          lName: value
        }
      }
    })
  }
  
  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={HandleChange}
          value={fullName.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={HandleChange}
          value={fullName.lName}
        />
        <button onClick={(event) => event.preventDefault()}>Submit</button>
      </form>
    </div>
  );
}

export default App;
