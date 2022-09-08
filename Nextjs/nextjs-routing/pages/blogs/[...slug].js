import { useRouter } from "next/router";

const BlogPage = (params) => {
  const router = useRouter();

  // Catch All Routes
  // Pass dynamic number of parameters
  // Get passed as Array

  console.log(router.query);

  return (
    <div>
      <h1>Blog Page</h1>
      <h3>Here is the blog...</h3>

      <ul>
        {router.query?.slug?.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default BlogPage;
