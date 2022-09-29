import PostGrid from "../posts/posts-grid";
import classes from "./featured-posts.module.css";

const FeaturedPost = (props) => {
  const { posts } = props;

  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>

      <PostGrid posts={posts} />
    </section>
  );
};

export default FeaturedPost;
