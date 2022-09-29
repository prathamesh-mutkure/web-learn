import ReactMarkdown from "react-markdown";
import classes from "./post-content.module.css";
import PostHeader from "./post-header";
import Image from "next/image";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";

SyntaxHighlighter.registerLanguage("javascript", js);
SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("css", css);

const PostContent = (props) => {
  const { slug, image, title, content } = props.post;

  const imagePath = `/images/posts/${slug}/${image}`;

  const customRenderers = {
    // img: (image) => {
    //   return (
    //     <Image
    //       src={`/images/posts/${slug}/${image.src}`}
    //       alt={image.alt}
    //       height={300}
    //       width={600}
    //     />
    //   );
    // },

    p: (paragraph) => {
      const { node, children } = paragraph;

      if (node.children[0].tagName != "img") {
        return <p>{children}</p>;
      }

      const image = node.children[0];

      return (
        <div className={classes.image}>
          <Image
            src={`/images/posts/${slug}/${image.properties.src}`}
            alt={image.alt}
            height={300}
            width={600}
          />
        </div>
      );
    },

    code: (code) => {
      console.log(code);
      const { className, children } = code;

      // className is something like language-js => We need the "js" part here
      const language = className.split("-")[1];

      return (
        <SyntaxHighlighter language={language} style={atomDark}>
          {children}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
