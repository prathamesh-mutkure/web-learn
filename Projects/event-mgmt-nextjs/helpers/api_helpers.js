export const getAllEvents = async () => {
  const response = await fetch("http://localhost:3000/api/events");
  const data = await response.json();

  return data;
};

export const getAllEventIds = async () => {
  const events = await getAllEvents();

  return events.map((event) => event.id);
};

export const getFeaturedEvents = async () => {
  const events = await getAllEvents();

  return events.filter((event) => event.isFeatured);
};

export const getFeaturedEventIds = async () => {
  const events = await getAllEvents();

  return events.filter((event) => event.isFeatured).map((event) => event.id);
};

export const getFilteredEvents = async (dateFilter) => {
  const events = await getAllEvents();

  const { year, month } = dateFilter;

  let filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
};

export const getEventById = async (id) => {
  const events = await getAllEvents();
  return events.find((event) => event.id === id);
};
