import { useRef, useState } from "react";

export default function Home() {
  const [feedbacks, setFeedbacks] = useState([]);
  const emailRef = useRef();
  const feedbackRef = useRef();

  const loadData = async (event) => {
    fetch("/api/feedback")
      .then((res) => res.json())
      .then((data) => {
        setFeedbacks(data.feedback);
      });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredFeedback = feedbackRef.current.value;

    if (!enteredEmail || !enteredFeedback) {
      alert("Enter all the data!");
      return;
    }

    const data = {
      id: new Date().toISOString(),
      email: enteredEmail,
      feedback: enteredFeedback,
    };

    fetch("/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        loadData();
      })
      .catch(console.log);
  };

  return (
    <div>
      <h1>The Home Page</h1>

      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email" ref={emailRef} />
        </div>

        <br />

        <div>
          <label htmlFor="feedback">Feedback: </label>
          <textarea
            type="feedback"
            name="feedback"
            id="feedback"
            rows={3}
            ref={feedbackRef}
          />
        </div>

        <br />

        <button type="submit">Send Feedback</button>
      </form>

      <br />
      <button onClick={loadData}>Load Feedbacks</button>

      <hr />

      <ul>
        {feedbacks.map((feedback) => {
          return <li key={feedback.id}>{feedback.feedback}</li>;
        })}
      </ul>
    </div>
  );
}
