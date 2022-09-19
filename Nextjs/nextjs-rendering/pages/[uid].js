// getServerSideProps with dynamic pages
// No need of getStaticPaths
// As there are no static paths to regenerate

const UserIdPage = (props) => {
  return <h1>{props.id}</h1>;
};

export default UserIdPage;

export const getServerSideProps = async (context) => {
  const { uid: userId } = context.params;

  return {
    props: {
      id: `userid-${userId}`,
    },
  };
};
