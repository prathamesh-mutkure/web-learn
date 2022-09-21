import Document, { Html, Head, Main, NextScript } from "next//document";

// _document.js
// This component is used to edit the default html document structure of our app
// And to add additional elements to it
// This must be a class based component
// With Html, Head, Main, body and NextScript
// Next.js will take this into account when building the app

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <div id="overlay" />

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
