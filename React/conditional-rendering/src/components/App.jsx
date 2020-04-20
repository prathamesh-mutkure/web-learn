import React from "react";
import Login from "./Login";

const isLoggedIn = true;

function App() {

    const time = new Date().getHours()

    return (
        <div className="container">
            {isLoggedIn ? <h1>Hello</h1> : <Login />}
            {time > 12 && <h1>Why are you still working?</h1>}
        </div>
    )

}

export default App;
