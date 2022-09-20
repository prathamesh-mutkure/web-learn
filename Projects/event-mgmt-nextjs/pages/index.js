import EventList from "../components/event/event-list";
import { getFeaturedEvents } from "../helpers/api_helpers";

const Home = (props) => {
  return (
    <div>
      <h1>Featured Events</h1>
      <EventList items={props.featuredEvents} />
    </div>
  );
};

const getStaticProps = async (context) => {
  const featuredEvents = await getFeaturedEvents();

  return { props: { featuredEvents }, revalidate: 3600 };
};

export default Home;
export { getStaticProps };
