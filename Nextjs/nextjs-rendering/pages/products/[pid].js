import fs from "fs";
import path from "path";

// getStaticProps Error:
// The getStaticProps funcion gives error when rendering SSG pages with dynamic route
// The dynamic routes indicates that the page should be dynamic
// Whereas the getStaticProps method indicates it is pre-rendered
// This gives error

// Link Prefetching:
// When using <Link> element, Next.js will prefetch props for the linked pages
// And then React will generate it on client side
// This saves time loading the props
// The pre-rendered page will only be served when user directly navigates to the page
// NextJs does this optimization automatically in the backend

// FALLBACK Prop
// The Fallback prop can be used to pre-load only selected paths
// The paths which are not pre-rendered, are rendered just in-time on client
// Which otherwise give 404 error
// The props are loaded at runtime, thus are undefined on intial load
// This must handles
// Thus, this works like standard react code
// The initial page is empty
//
// 'blocking' value
// The third way is to pre-render the page on server
// The props are loaded on server
// And the complete rendered page is sent to the client
// This increases the request time but the user gets to see the complete page
//
// All these features gives flexibility to pre-render pages which are frequently visited
// The rest other pages can be built on time

const ProductDetails = (props) => {
  const { product } = props;

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Product Details</h1>

      <h3>{product.title}</h3>
      <p>{product.description}</p>
    </div>
  );
};

const getData = async () => {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);

  return data;
};

export const getStaticProps = async (context) => {
  const { pid } = context.params;

  const data = await getData();
  const product = data.products.find((product) => product.id === pid);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product: product,
    },
  };
};

export const getStaticPaths = async (context) => {
  const data = await getData();

  const ids = data.products.map((p) => p.id);
  const pathsWithParams = [ids[0], ids[1]].map((id) => ({
    params: { pid: id },
  }));

  return {
    paths: pathsWithParams,
    // fallback: false,
    fallback: true,
    // fallback: "blocking",
  };
};

export default ProductDetails;
