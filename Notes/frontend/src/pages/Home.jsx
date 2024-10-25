import React from "react";
import MyNavbar from "../components/MyNavbar";
import NoteModel from "../components/NoteModel";
import NoteCard from "../components/NoteCard";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Home = () => {
  const navigate = useNavigate()
  
  const handleCreate = async (title, description, handleClose) => {
    try {
      const apiURL = "http://localhost:5000/api/note/add"
      const response = await axios.post(apiURL, {
        title,
        description,
      },{
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      })

      if(response.data.success){
        handleClose();
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  };
  
  return (
    <div>
      <MyNavbar />
      <div className="container mt-2">
        <NoteModel handleCreate={handleCreate}/>
      </div>
    </div>
  );
};

export default Home;
