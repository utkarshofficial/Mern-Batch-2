import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

function NoteModel({handleCreate, show, handleCloseModal, handleShowModal, currentNote, updateNote}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(()=>{
    if(currentNote){
      setTitle(currentNote.title);
      setDescription(currentNote.description);
    } 
  }, [currentNote])
  
  const handleClick = ()=>{
    if(currentNote){
      updateNote(id, title, description)
    }{
      handleCreate(title, description)
      setTitle("")
      setDescription("")
    }
  }

  return (
    <>
      <Button variant="primary" onClick={handleShowModal}>
        Create Note
      </Button>

      <Modal show={show} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {currentNote ? "Edit Note" : "Add new note"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g., C++ Notes"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClick}>
            {currentNote ? "Update" : "Create"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NoteModel;
