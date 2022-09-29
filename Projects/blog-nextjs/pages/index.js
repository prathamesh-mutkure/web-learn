import { Fragment } from "react";
import FeaturedPost from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPost } from "../helpers/post-helper";
import Head from "next/head";

const HomePage = (props) => {
  const { posts } = props;

  return (
    <Fragment>
      <Head>
        <title>JS Blog</title>
        <meta
          name="description"
          content="Blogs related to Web and Mobile Development"
        />
      </Head>
      <Hero />
      <FeaturedPost posts={posts} />
    </Fragment>
  );
};

const getStaticProps = (_) => {
  const featuredPosts = getFeaturedPost();

  return {
    props: {
      posts: featuredPosts,
    },
    // revalidate: 3600,
  };
};

export default HomePage;
export { getStaticProps };
