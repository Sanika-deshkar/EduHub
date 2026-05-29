import React, { useState } from "react";
import "./auth.css";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { server } from "../../config";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBtnLoading(true);
    try {
      const { data } = await axios.post(`${server}/api/user/forgot`, {
        email,
        password,
      });

      toast.success(data.message);
      navigate("/login");
      setBtnLoading(false);
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
      setBtnLoading(false);
    }
  };
  return (
    <div className="auth-page">
      <div className="auth-form">
        <h2>Reset Password</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Enter Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">New Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button disabled={btnLoading} className="common-btn">
            {btnLoading ? "Please Wait..." : "Reset Password"}
          </button>
        </form>
        <p>
          Remembered it? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
