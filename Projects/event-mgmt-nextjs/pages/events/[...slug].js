import { useRouter } from "next/router";
import { Fragment } from "react";
import EventList from "../../components/event/event-list";
import ResultsTitle from "../../components/event/results-title";
import { getFilteredEvents } from "../../data";

const FilteredEventsPage = () => {
  const router = useRouter();

  if (!router?.query?.slug) {
    return <p className="center">Loading...</p>;
  }

  const [year, month] = router.query.slug;

  const events = getFilteredEvents({
    year: Number(year),
    month: Number(month),
  });

  if (!events || events?.length === 0) {
    return <p className="center">No Matching Events</p>;
  }

  const date = new Date(Number(year), Number(month) - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={events} />
    </Fragment>
  );
};

export default FilteredEventsPage;
