import fs from "fs";
import matter from "gray-matter";
import path from "path";

const postsDir = path.join(process.cwd(), "content");

const getPostFiles = () => {
  return fs.readdirSync(postsDir);
};

const getPost = (fileIdentifier) => {
  // Remove .md extension if exists
  const postSlug = fileIdentifier.replace(/\.md$/, "");

  const postPath = path.join(postsDir, `${postSlug}.md`);
  const fileData = fs.readFileSync(postPath);

  const { data, content } = matter(fileData);

  return {
    slug: postSlug,
    content,
    ...data,
  };
};

const getAllPosts = () => {
  const postsFile = getPostFiles();

  const posts = postsFile.map(getPost);

  return posts;
};

const getFeaturedPost = () => {
  const allPosts = getAllPosts();

  const featuredPost = allPosts.filter((post) => post.isFeatured);

  return featuredPost;
};

export { getPost, getAllPosts, getFeaturedPost, getPostFiles };
