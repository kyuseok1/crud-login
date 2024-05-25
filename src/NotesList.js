import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function NotesList() {
  const [notes, setNotes] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";
    if (token) {
      const fetchNotes = async () => {
        try {
          const response = await axios.get(`${API_URL}/notes`, {
            headers: {
              Authorization: `Bearer ${token}`, // Bearer 키워드 추가
            },
          });
          setNotes(response.data);
        } catch (error) {
          console.error("Error fetching notes", error);
        }
      };

      fetchNotes();
    }
  }, [token]);

  const deleteNote = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/notes/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Bearer 키워드 추가
        },
      });
      setNotes(notes.filter((note) => note._id !== id));
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div>
      <h2>Notes</h2>
      {console.log(notes)}

      <Link to="/add">Add Note</Link>
      <ul>
        {notes.map((note) => (
          <li key={note._id}>
            <Link to={`/edit/${note._id}`}>{note.title}</Link>
            <button onClick={() => deleteNote(note._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotesList;
