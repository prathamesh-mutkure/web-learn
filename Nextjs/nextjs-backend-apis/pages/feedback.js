import { Fragment, useState } from "react";
import { getPath, getData } from "./api/feedback/index";

// DATA FROM APIs:
// While using data from API server in getStaticProps or getServerSideProps
// It is advisable to directly call the code running on the server
// Instead of calling the data through fetch/API
// This increases performance and speed

// BIND()
// The bind() methods can be used to assign "this" value to the function
// And also assign it arguments on run-time

const FeedbackListPage = (props) => {
  const [feedbackDetail, setFeedbackDetails] = useState();

  const showDetails = (id) => {
    fetch(`/api/feedback/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setFeedbackDetails(data);
      })
      .catch(console.log);
  };

  return (
    <Fragment>
      {feedbackDetail && <p>{feedbackDetail.email}</p>}
      <ul>
        {props.feedbackData.map((feedback) => {
          return (
            <Fragment>
              <li key={feedback.id}>{feedback.feedback}</li>
              <button onClick={showDetails.bind(null, feedback.id)}>
                Details
              </button>
            </Fragment>
          );
        })}
      </ul>
    </Fragment>
  );
};

const getStaticProps = (_) => {
  const path = getPath();
  const data = getData(path);

  return {
    props: {
      feedbackData: data,
    },
    revalidate: 60,
  };
};

export default FeedbackListPage;
export { getStaticProps };
