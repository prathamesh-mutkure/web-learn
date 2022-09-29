import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../helpers/post-helper";
import Head from "next/head";
import { Fragment } from "react";

const AllPostPage = (props) => {
  const { posts } = props;

  return (
    <Fragment>
      <Head>
        <title>JS Blog</title>
        <meta name="description" content="All Posts here!" />
      </Head>
      <AllPosts posts={posts} />
    </Fragment>
  );
};

const getStaticProps = (_) => {
  const featuredPosts = getAllPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    // revalidate: 3600,
  };
};

export default AllPostPage;
export { getStaticProps };
