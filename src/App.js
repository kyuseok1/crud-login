import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotesList from "./NotesList";
import AddNote from "./AddNote";
import EditNote from "./EditNote";
import Login from "./Login";
import Register from "./Register";
import Header from "./Header";
import PrivateRoute from "./PrivateRoute";
import Profile from "./Profile";

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
