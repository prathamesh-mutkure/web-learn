import { useRouter } from "next/router";
import EventList from "../../components/event/event-list";
import EventsSearch from "../../components/event/event-search";
import { getAllEvents } from "../../data";

const AllEventsPage = () => {
  const router = useRouter();
  const allEvents = getAllEvents();

  const searchHandler = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <div>
      <EventsSearch onSearch={searchHandler} />
      <EventList items={allEvents} />
    </div>
  );
};

export default AllEventsPage;
