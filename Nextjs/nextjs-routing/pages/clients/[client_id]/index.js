import { useRouter } from "next/router";

const ClientPage = (params) => {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>Client Profile Page</h1>
      <h3>All Projects for Client Here...</h3>

      <br />

      <h3>Client ID: {router.query.client_id}</h3>
    </div>
  );
};

export default ClientPage;
