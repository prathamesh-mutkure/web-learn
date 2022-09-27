import { createContext, useEffect, useState } from "react";

const NotificationContext = createContext({
  notification: null, // title, message, status
  showNotification: (notoficationData) => {},
  hideNotification: () => {},
});

const NotificationContextProvider = ({ children }) => {
  const [activeNotification, setActiveNotification] = useState();

  useEffect(() => {
    const timer = setTimeout(() => {
      hideNotificationHandler();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [activeNotification]);

  const showNotificationHandler = (notificationData) => {
    setActiveNotification(notificationData);
  };

  const hideNotificationHandler = () => {
    setActiveNotification(null);
  };

  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };

  return (
    <NotificationContext.Provider value={context}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
export { NotificationContextProvider };
