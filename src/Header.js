import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // localStorage에서 토큰 삭제
    localStorage.removeItem("name");
    navigate("/login"); // 로그인 페이지로 리다이렉트
  };
  return (
    <div>
      <Link to="/">홈</Link> <br></br>
      <Link to="/register">회원가입</Link>
      <br></br>
      <Link to="/login">로그인</Link>
      <br></br>
      <Link to="/profile">프로필</Link>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Header;
