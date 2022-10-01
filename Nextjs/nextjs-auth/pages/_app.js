import Layout from "../components/layout/layout";
import "../styles/globals.css";
import { Provider } from "next-auth/client";

// next-auth PROVIDER wrapper:
// We can return the session retrieved inside the getServerSideProps through props property
// And then this session can be passed to Provider wrapper
// Which can then help next-auth to optimize session/token validation through server
// This will reduce some overhead and additional http request
//
// But for request which don't return session
// The session will be undefinded
// And next-auth will re-fetch/validate the session through server

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
