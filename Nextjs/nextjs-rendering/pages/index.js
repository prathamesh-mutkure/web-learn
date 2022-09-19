import fs from "fs";
import path from "path";

import Link from "next/link";

// STATIC
// Static HTML files, no data

// SSG (Static Site Generation)
// Static HTML files + data
// Data passed as props using getStaticProps
// getStaticProps contains code which run only on server
// The page is generated during build time

// ISR (Incremental Site Regeneration)
// Static HTML Files + data (regenerated)
// The files are regenerated after X seconds
// After the request
// The page is regenerated after a request only if it's older than X seconds
// "revalidate" property is returned through getStaticProps
// The regeneration takes place on server side

// SSR (Server Side Rendering)

const Home = (props) => {
  const { products } = props;

  return (
    <div>
      <h1>Products</h1>

      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <Link href={`/products/${product.id}`}>
                <h3>{product.title}</h3>
              </Link>
              <p>{product.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const getStaticProps = async (context) => {
  console.log("regenerating...");
  // console.log(context);
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      notfound: true,
    };
  }

  if (data.products.lenght == 0) {
    return {
      redirect: {},
    };
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
};

export default Home;
