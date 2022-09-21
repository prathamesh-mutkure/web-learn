import Layout from "../components/layout/layout";
import "../styles/globals.css";
import Head from "next/head";

// _app.js
// This components serves as the route component of our app
// Thus, can be used to add Head and other generic componenrs

// HEAD
// Multilple head can be added to a component
// Nextjs will automatically merge all those elements
// And resolve conflics if any
// In case of conflict, the most recent element is considered

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Next.js Events</title>
        <meta name="author" content="Prathamesh Mutkure" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
