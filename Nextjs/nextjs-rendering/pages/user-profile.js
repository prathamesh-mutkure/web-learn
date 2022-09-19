// getServerSideProps
// The getServerSideProps method executes for each request on server
// It returns same properties as getStaticProps
// The only difference is the timing and "context"
// It has access to various additional properties like request and response
// Which can be used to access things like cookies

const UserProfile = (props) => {
  return <h1>{props.username}</h1>;
};

export default UserProfile;

export async function getServerSideProps(context) {
  const { params, req, res } = context;

  return {
    props: {
      username: "John Doe",
    },
  };
}
