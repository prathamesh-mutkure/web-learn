import EventList from "../components/event/event-list";
import { getFeaturedEvents } from "../helpers/api_helpers";
import Head from "next/head";
import NewsletterRegistration from "../components/input/newsletter-registration";

const Home = (props) => {
  return (
    <div>
      <Head>
        <title>Next.js Events</title>
        <meta name="author" content="Prathamesh Mutkure" />
      </Head>

      <div className="center">
        <h1>Featured Events</h1>
      </div>

      <NewsletterRegistration />
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
