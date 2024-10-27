import express from "express";
import Note from '../models/Note.js';
import middleware from "../middleware/middleware.js";

const router = express.Router();

router.post("/add", middleware, async (request, response) => {
  try {
    const { title, description} = request.body;

    const newNote = new Note({
      title,
      description,
      userId: request.user.id,
      timeStamp: Date.now()
    });

    await newNote.save();

    return response
      .status(200)
      .json({ success: true, message: "Note is created successfully" });
  } catch (error) {
    return response.status(500).json({
      success: false,
      message: "Error in adding note",
    });
  }
});

router.get("/", async (request, response)=>{
  try {
    const notes = await Note.find()
    return response.status(200).json({success: true, notes})
  } catch (error) {
    return  response.status(500).json({success: false, message: "server error"})
  }
})

router.put("/:id", middleware, async (request, response) => {
  try {
    const {id} = request.params
    // findbyidandupdate in db
    // request.body.title,  request.body.description, timestamp
    // return response success  message

  } catch (error) {
    
  }
})


export default router