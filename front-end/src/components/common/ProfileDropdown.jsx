import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ProfileDropdown() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    // later: clear auth token
    navigate("/login");
  };

  return (
    <div style={{ position: "relative" }}>
      <button onClick={() => setOpen(!open)}>👤</button>

      {open && (
        <div className="dropdown">
          <button onClick={() => navigate("/profile/info")}>Info</button>
          <button onClick={() => navigate("/profile/preferences")}>Preferences</button>
          <button onClick={() => navigate("/profile/account")}>Account</button>
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  );
}
