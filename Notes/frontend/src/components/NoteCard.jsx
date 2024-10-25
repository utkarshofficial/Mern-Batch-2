import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

function NoteCard({note}) {
  return (
    <Card className="text-center" style={{width: "18rem"}}>
      <Card.Header>
        <Card.Title>{note.title}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>
            {note.description}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex justify-content-between">
        <p className="m-0">{note.timeStamp}</p>
        <div>
            <MdEdit className="mx-1 text-primary"/>
            <MdDelete className="mx-1 text-danger"/>
        </div>
      </Card.Footer>
    </Card>
  );
}

export default NoteCard;
