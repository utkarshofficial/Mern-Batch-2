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
    const updatedData = {
      ...request.body,
      timeStamp: Date.now(),
    }
    const updateNote = await Note.findByIdAndUpdate(id, updatedData)
    // return response success  message
    return response.status(200).json({success: true, updateNote, message: "Note is updated"})
  } catch (error) {
    return response.status(500).json({success: false, message: "Can't update note"})
  }
})

router.delete("/:id", middleware, async (request, response)=>{
  try {
    const {id} = request.params
    const deletedNote = await Note.findByIdAndDelete(id)
    return response.status(200).json({success: true, deletedNote, message: "Note is deleted"})
  } catch (error) {
    return response.status(500).json({success: false, message: "Can't delete note"})
  }
})


export default router