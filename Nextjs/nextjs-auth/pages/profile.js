import { getSession } from "next-auth/client";
import UserProfile from "../components/profile/user-profile";

// ROUTE PROTECTION
// 1. Client Side
// We can check the session variable to determine auth state
// And show loading widget meanwhile we're checking auth state
//
// 2. Sever Side
// We can use getServerSideProps to get access to the session
// And redirect immedietly if user isn't authenticated
// And send the page only if user is authenticated
//
// Server side page doesn't need loading page
// Thus, it is better suited for most

function ProfilePage() {
  return <UserProfile />;
}

const getServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  if (session) {
    return {
      props: {
        session,
      },
    };
  }

  return {
    redirect: {
      destination: "/auth",
      permanant: false,
    },
  };
};

export default ProfilePage;
export { getServerSideProps };
