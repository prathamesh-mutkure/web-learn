import PostContent from "../../components/posts/post-detail/post-content";
import { getPost, getPostFiles } from "../../helpers/post-helper";
import Head from "next/head";
import { Fragment } from "react";

const PostDetailPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </Fragment>
  );
};

const getStaticProps = (context) => {
  const { slug } = context.params;

  const post = getPost(slug);

  return {
    props: { post },
  };
};

const getStaticPaths = () => {
  const fileNames = getPostFiles();

  const slugs = fileNames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export default PostDetailPage;
export { getStaticProps, getStaticPaths };
