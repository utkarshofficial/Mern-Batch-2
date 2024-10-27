import React, { useEffect, useState } from "react";
import MyNavbar from "../components/MyNavbar";
import NoteModel from "../components/NoteModel";
import NoteCard from "../components/NoteCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);

  const handleCreate = async (title, description, handleClose) => {
    try {
      const apiURL = "http://localhost:5000/api/note/add";
      const response = await axios.post(
        apiURL,
        {
          title,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.data.success) {
        handleClose();
        fetchNotes()
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchNotes = async () => {
    try {
      const apiURL = "http://localhost:5000/api/note/";
      const response = await axios.get(apiURL);
      if (response.data.success) {
        setNotes(response.data.notes);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div>
      <MyNavbar />
      <div className="container mt-2">
        <NoteModel handleCreate={handleCreate} />
        <div className="notes d-flex gap-3 mt-2 flex-wrap">
          {notes.map((note) => (
            <NoteCard note={note} key={note._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
