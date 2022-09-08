import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowIcon from "../icons/arrow-right-icon";
import classes from "./event-item.module.css";

const EventItem = ({ item }) => {
  const { id, title, description, location, date, image, isFeatured } = item;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");
  const link = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />

      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{formattedDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{location}</address>
          </div>
          <div className={classes.actions}>
            <Button link={link}>
              <span>Explore Event</span>
              <span className={classes.icon}>
                <ArrowIcon />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
