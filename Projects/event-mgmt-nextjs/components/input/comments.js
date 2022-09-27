import { useEffect, useState, useContext } from "react";

import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.css";
import NotificationContext from "../../store/notification-context";

function Comments(props) {
  const { eventId } = props;

  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [loading, setLoading] = useState(false);
  const notificationContext = useContext(NotificationContext);

  useEffect(() => {
    if (!showComments) return;

    getComments();
  }, [showComments]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    notificationContext.showNotification({
      title: "Sending comment...",
      message: "Your comment is currently being stored",
      status: "pending",
    });

    fetch(`/api/comments/${eventId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    })
      .then((res) => {
        notificationContext.showNotification({
          title: "Success",
          message: "Your comment is saved!",
          status: "success",
        });

        getComments();
      })
      .catch((err) => {
        notificationContext.showNotification({
          title: "Error",
          message: err.message || "Something went wrong!",
          status: "error",
        });
      });
  }

  const getComments = () => {
    setLoading(true);

    fetch(`/api/comments/${eventId}`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data.comments);
      })
      .catch(console.error)
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList items={comments} loading={loading} />}
    </section>
  );
}

export default Comments;
