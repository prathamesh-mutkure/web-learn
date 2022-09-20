import { useRouter } from "next/router";
import { Fragment } from "react";

import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import LogisticsItem from "../../components/event-detail/logistics-item";
import { getEventById, getFeaturedEventIds } from "../../helpers/api_helpers";

const EventPage = (props) => {
  const { event } = props;

  if (!event) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  const { date, description, id, image, isFeatured, location, title } = event;

  return (
    <Fragment>
      <EventSummary title={title} />

      <EventLogistics
        date={date}
        address={location}
        image={image}
        imageAlt={title}
      />

      <EventContent>
        <p>{description}</p>
      </EventContent>
    </Fragment>
  );
};

const getStaticProps = async (context) => {
  const { eventId } = context.params;

  const event = await getEventById(eventId);

  return { props: { event }, revalidate: 60 };
};

const getStaticPaths = async (context) => {
  const eventIds = await getFeaturedEventIds();

  return {
    paths: eventIds.map((id) => ({ params: { eventId: id } })),
    fallback: true,
  };
};

export default EventPage;
export { getStaticProps, getStaticPaths };
