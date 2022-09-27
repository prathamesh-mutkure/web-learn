import { Fragment, useContext } from "react";
import MainHeader from "./main-header";
import Notification from "../notification/notification";
import NotificationContext from "../../store/notification-context";

const Layout = ({ children }) => {
  const notificationCtx = useContext(NotificationContext);

  const activeNotification = notificationCtx.notification;

  console.log(activeNotification);

  return (
    <Fragment>
      <MainHeader />

      <main>{children}</main>

      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </Fragment>
  );
};

export default Layout;
