import { useRouter } from "next/router";
import EventList from "../../components/event/event-list";
import EventsSearch from "../../components/event/event-search";
import { getAllEvents } from "../../helpers/api_helpers";

const AllEventsPage = (props) => {
  const router = useRouter();
  const { events } = props;

  const searchHandler = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <div>
      <EventsSearch onSearch={searchHandler} />
      <EventList items={events} />
    </div>
  );
};

const getStaticProps = async (context) => {
  const events = await getAllEvents();
  return { props: { events }, revalidate: 60 };
};

export default AllEventsPage;
export { getStaticProps };
