
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { authService } from "../../api/services/auth.service";
import { validateEmail } from "../../utils/validation";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate=useNavigate();

//   const DEV_MODE = true; //  SET TO FALSE WHEN BACKEND IS READY

//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   if (!validateEmail(email)) {
//     alert("Invalid email");
//     return;
//   }
//   const role = localStorage.getItem("pendingRole") || "farmer";
//   const fakeUser = {
//     id: 1,
//     name: "Test User",
//     role
//    };

//   const fakeToken = "dev-token";

//   login(fakeUser, fakeToken);

//   if (role === "admin") navigate("/admin/dashboard");
//   else if (role === "buyer") navigate("/buyer/dashboard");
//  else navigate("/farmer/dashboard");
// };

const DEV_MODE = true; // 🔴 SET TO FALSE WHEN BACKEND IS READY

const handleSubmit = async (e) => {
  e.preventDefault();

  if (DEV_MODE) {
    const role = localStorage.getItem("pendingRole") || "farmer";

    login(
      { id: 1, name: "Dev User", role },
      "dev-token"
    );

    if (role === "admin") navigate("/admin/dashboard");
    else if (role === "buyer") navigate("/buyer/dashboard");
    else navigate("/farmer/dashboard");

    return;
  }

  // 🔵 BACKEND MODE
  const { user, token } = await authService.login({ email, password });
  login(user, token);
};



  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>Login</h2>
      <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default LoginForm;
