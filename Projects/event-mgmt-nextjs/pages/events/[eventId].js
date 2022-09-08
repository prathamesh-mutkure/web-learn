import { useRouter } from "next/router";
import { Fragment } from "react";
import { getEventById } from "../../data";

import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import LogisticsItem from "../../components/event-detail/logistics-item";

const EventPage = () => {
  const router = useRouter();

  const event = getEventById(router.query.eventId);

  const { date, description, id, image, isFeatured, location, title } = event;

  if (!event) {
    return <h1>Invalid Event ID</h1>;
  }

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

export default EventPage;
