import React, { useEffect, useState } from "react";
import MyNavbar from "../components/MyNavbar";
import NoteModel from "../components/NoteModel";
import NoteCard from "../components/NoteCard";
import axios from "axios";

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);
  const [show, setShow] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredNotes, setFilteredNotes] = useState([]);

  const handleCloseModal = () => {
    setShow(false);
  };
  const handleShowModal = () => {
    setShow(true);
  };

  const handleCreate = async (title, description) => {
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
        fetchNotes();
        handleCloseModal();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateNote = async (id, title, description) => {
    try {
      const apiURL = `http://localhost:5000/api/note/${id}`;
      const response = await axios.put(
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
        fetchNotes();
        handleCloseModal();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteNote = async (id) => {
    try {
      const apiURL = `http://localhost:5000/api/note/${id}`;
      const response = await axios.delete(apiURL, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.data.success) {
        fetchNotes();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (note) => {
    setCurrentNote(note);
    handleShowModal();
  };

  const fetchNotes = async () => {
    try {
      const apiURL = "http://localhost:5000/api/note/";
      const response = await axios.get(apiURL, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
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

  useEffect(() => {
    let newFilteredNotes = notes.filter(
      (note) =>
        note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredNotes(newFilteredNotes)
    
  }, [searchQuery, notes]);

  return (
    <div>
      <MyNavbar setSearchQuery={setSearchQuery} />
      <div className="container mt-2">
        <NoteModel
          handleCreate={handleCreate}
          show={show}
          handleCloseModal={handleCloseModal}
          handleShowModal={handleShowModal}
          currentNote={currentNote}
          updateNote={updateNote}
        />
        <div className="notes d-flex gap-3 mt-2 flex-wrap">
          {filteredNotes.length > 0 ? (
            filteredNotes.map((note) => (
              <NoteCard
                deleteNote={deleteNote}
                handleEdit={handleEdit}
                note={note}
                key={note._id}
              />
            ))
          ) : (
            <p>No notes</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
