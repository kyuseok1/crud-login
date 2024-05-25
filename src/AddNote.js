import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); // localStorage에서 토큰을 가져옴
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        `${API_URL}/note`,
        { title, content },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Bearer 키워드 추가
          },
        }
      )
      .then(() => navigate("/"))
      .catch((error) => console.error("There was an error!", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Note</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
      ></textarea>
      <button type="submit">Add Note</button>
    </form>
  );
}

export default AddNote;
