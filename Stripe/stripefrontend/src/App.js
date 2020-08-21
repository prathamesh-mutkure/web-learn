import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import StripeCheckout from "react-stripe-checkout";

function App() {
  const [product, setProduct] = useState({
    name: "React",
    price: 10,
  });

  const makePayment = (token) => {
    const body = {
      token,
      product,
    };

    return fetch(`http://localhost:8001/payment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log(response);
        alert("Payment successful");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <StripeCheckout
          token={makePayment}
          stripeKey={process.env.REACT_APP_KEY}
          name={product.name}
          amount={10 * 100}
        ></StripeCheckout>
      </header>
    </div>
  );
}

export default App;
