import { useNotifications } from "../hooks/useNotifications";

export default function Notifications() {
  const { notifications, markAsRead } = useNotifications();

  return (
    <div className="notifications">
      <h2>Notifications</h2>

      <ul className="notification-list">
        {notifications.map(n => (
          <li
            key={n.id}
            className={`notification ${n.type}`}
            onClick={() => markAsRead(n.id)}
          >
            {n.message}
            {!n.read && <strong> (new)</strong>}
          </li>
        ))}
      </ul>
    </div>
  );
}
