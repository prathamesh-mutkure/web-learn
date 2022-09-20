import { useState, useEffect } from "react";
import useSWR from "swr";

// CLIENT SIDE DATA FETCHING WITH SSR:
// We can fetch some data on client with SSR as well
// This type of component uses standard React useEffect code
// The only difference is - the page is still pre-rendered on server to some extent
// The initial code retured by component is sent to the client
// Thus, some of the code is still visible to the user
// Then, once the data is loaded using useEffect, the page is updated
// This is standard react process
// Just with some pre-rendering on server side

// PRE-FETCHING with CLIENT SIDE FETCHING
// We can use getStaticProps or getServerSideProps to pre-render the page with some data
// This page with pre-fetched data is sent to the user initially
// Then we make another request in the client side to revalide or update the data
// We can also make the page ISR, so that the page is regenerated with latest data
// The data can be constantly updated on the client side (real-time data use case)

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const SalesPage = (props) => {
  const [sales, setSales] = useState(props.sales);

  const { data, error } = useSWR("/api/sales", fetcher);

  useEffect(() => {
    const salesData = [];

    for (const key in data) {
      salesData.push({
        id: key,
        username: data[key].username,
        volume: data[key].volume,
      });
    }

    setSales(salesData);
  }, [data]);

  //   useEffect(() => {
  //     setIsLoading(true);
  //     fetch("/api/sales")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         const salesData = [];

  //         for (const key in data) {
  //           salesData.push({
  //             id: key,
  //             username: data[key].username,
  //             volume: data[key].volume,
  //           });
  //         }

  //         setSales(salesData);
  //       })
  //       .catch(console.log)
  //       .finally(() => {
  //         setIsLoading(false);
  //       });
  //   }, []);

  if (error) {
    console.log(error);
    return <p>Failed to load data!</p>;
  }

  if (!data && !sales) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - {sale.volume}
        </li>
      ))}
    </ul>
  );
};

const getStaticProps = async (context) => {
  return fetch("http:localhost:3000/api/sales")
    .then((response) => response.json())
    .then((data) => {
      const sales = [];

      for (const key in data) {
        sales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }

      return { props: { sales } };
    });
};

export default SalesPage;
export { getStaticProps };
