import { useContext, useRef } from "react";
import classes from "./newsletter-registration.module.css";
import NotificationContext from "../../store/notification-context";

function NewsletterRegistration() {
  const emailRef = useRef();
  const notificationContext = useContext(NotificationContext);

  function registrationHandler(event) {
    event.preventDefault();

    const email = emailRef.current.value;

    notificationContext.showNotification({
      title: "Signing Up...",
      message: "Registering for the newsletter",
      status: "pending",
    });

    fetch("/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => {
        if (res.ok) return res.json();

        return res.json().then((data) => {
          throw new Error(data.err || "Something went wrong!");
        });
      })
      .then((data) => {
        console.log(data);

        notificationContext.showNotification({
          title: "Success!",
          message: "Successfully registered for the newsletter",
          status: "success",
        });
      })
      .catch((err) => {
        console.error(err);

        notificationContext.showNotification({
          title: "Error !",
          message: err.message || "Error registering for the newsletter",
          status: "error",
        });
      });
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
