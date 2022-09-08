import { useRouter } from "next/router";

const ClientProjectPage = (params) => {
  const router = useRouter();

  console.log(router.query);

  const { client_id, client_project_id } = router.query;

  return (
    <div>
      <h1>Project Page</h1>
      <h3>Project by particular client</h3>

      <br />

      <h3>Client ID: {client_id}</h3>
      <h3>Project ID: {client_project_id}</h3>
    </div>
  );
};

export default ClientProjectPage;
