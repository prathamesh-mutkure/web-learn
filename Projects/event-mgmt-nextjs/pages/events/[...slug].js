import { useRouter } from "next/router";
import { Fragment } from "react";
import EventList from "../../components/event/event-list";
import ResultsTitle from "../../components/event/results-title";
import { getFilteredEvents } from "../../helpers/api_helpers";

const FilteredEventsPage = (props) => {
  const { events, year, month, hasError } = props;

  if (hasError) {
    return (
      <div className="center">
        <p>Invalid date format!</p>
      </div>
    );
  }

  const date = new Date(Number(year), Number(month) - 1);

  if (!events || events?.length === 0) {
    return (
      <div className="center">
        <p>No Matching Events!</p>
      </div>
    );
  }

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={events} />
    </Fragment>
  );
};

const getServerSideProps = async (context) => {
  const { slug } = context.params;
  const year = +slug[0];
  const month = +slug[1];

  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2000 ||
    month < 1 ||
    month > 12
  ) {
    return {
      props: {
        hasError: true,
      },
      // notFound: true,
      // redirect: {
      //   destination: "/error",
      // },
    };
  }

  const events = await getFilteredEvents({ year, month });

  return { props: { events, year, month } };
};

export default FilteredEventsPage;
export { getServerSideProps };
