import { useNavigate } from "react-router-dom";

export default function NotificationBell() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/notifications")}
      aria-label="Notifications"
      style={{ background: "none", border: "none", cursor: "pointer" }}
    >
      🔔
    </button>
  );
}
