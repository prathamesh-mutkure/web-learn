import AuthForm from "../components/auth/auth-form";
import { getSession } from "next-auth/client";

function AuthPage() {
  return <AuthForm />;
}

const getServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      props: {},
    };
  }

  return {
    redirect: {
      destination: "/profile",
      permanant: false,
    },
    props: {
      session,
    },
  };
};

export default AuthPage;
export { getServerSideProps };
