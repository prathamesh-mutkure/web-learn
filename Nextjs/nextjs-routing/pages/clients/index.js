import { useRouter } from "next/router";
import Link from "next/link";

const ClientsPage = (params) => {
  const router = useRouter();

  const clients = ["Harry Potter", "Ron Weasly", "Hermoine Granger"];

  const onClickHandler = (e) => {
    // router.push({
    //   pathname: "/clients/[id]",
    //   query: {
    //     id: clients[1],
    //   },
    // });

    router.push(`/clients/${clients[1]}`);
  };

  return (
    <div>
      <h1>Clients Page</h1>
      <h3>List of all clients here...</h3>

      <Link
        href={{
          pathname: `/clients/${clients[0]}`,
        }}
      >
        {clients[0]}
      </Link>

      <br></br>

      <Link
        href={{
          pathname: "/clients/[id]",
          query: {
            id: clients[2],
          },
        }}
      >
        {clients[2]}
      </Link>

      <br></br>

      <button onClick={onClickHandler}>{clients[1]}</button>
    </div>
  );
};

export default ClientsPage;
