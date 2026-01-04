import { useEffect, useState } from "react";
import { notificationsApi } from "../api/services/notification.service";

export function useNotifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    notificationsApi.getAll().then(setNotifications);
  }, []);

  const markAsRead = async (id) => {
    await notificationsApi.markRead(id);
    setNotifications(prev =>
      prev.map(n =>
        n.id === id ? { ...n, read: true } : n
      )
    );
  };

  return {
    notifications,
    markAsRead
  };
}
