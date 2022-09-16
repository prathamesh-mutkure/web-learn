import fs from "fs";
import path from "path";

// STATIC
// Static HTML files, no data

// SSG (Static Site Generation)
// Static HTML files + data
// Data passed as props using getStaticProps
// getStaticProps contains code which run only on server
// The page is generated during build time

// ISR (Incremental Site Regeneration)

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
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      products: data.products,
    },
  };
};

export default Home;
