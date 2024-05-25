import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotesList from "./NotesList.js";
import AddNote from "./AddNote.js";
import EditNote from "./EditNote.js";
import Login from "./Login.js";
import Register from "./Register.js";
import Header from "./Header.js";
import PrivateRoute from "./PrivateRoute.js";
import Profile from "./Profile.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<NotesList />} />
          <Route element={<PrivateRoute />}>
            <Route path="/notes" element={<NotesList />} />
            <Route path="/add" element={<AddNote />} />
            <Route path="/edit/:id" element={<EditNote />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />{" "}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
