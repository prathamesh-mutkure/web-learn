import classes from "./comment-list.module.css";

function CommentList(props) {
  const { items } = props;

  if (props.loading) {
    return <p>Loading...</p>;
  }

  return (
    <ul className={classes.comments}>
      {items.map((comment) => {
        return (
          <li key={comment._id}>
            <p>{comment.text}</p>
            <div>
              By <address>{comment.name}</address>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default CommentList;
