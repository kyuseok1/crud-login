import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // 메시지 상태 추가
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://kyuseok-noteapp.netlify.app/register", {
        name,
        email,
        password,
      });
      setMessage("Registration successful! Redirecting to login page..."); // 성공 메시지 설정
      setTimeout(() => {
        navigate("/login");
      }, 2000); // 2초 후에 페이지 이동
    } catch (error) {
      setMessage(
        "Registration error: " +
          (error.response?.data?.message || error.message)
      );
      console.error("Registration error", error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>} {/* 메시지 표시 */}
    </div>
  );
};

export default Register;
