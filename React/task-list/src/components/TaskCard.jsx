import PropTypes from "prop-types";
import Popup from "./Popup";
import { useState } from "react";

const TaskCard = ({ task, handleDelete, handleUpdate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);



  return (
    <>
      { isOpen && (
        <Popup 
          isOpen={isOpen}
          handleClose={handleClose}
          task={task}
          handleSubmit={handleUpdate}
        />
      ) }
      <div className="task-card text-white m-3 p-3 bg-[#5E503F] rounded-lg">
      <div className="task-header flex justify-between">
        <p className="text-xs font-bold">Task Description</p>
        <span className="text-xs">{task.time}</span>
      </div>
      <div className="content text-xl">
        <p>{task.description}</p>
      </div>
      <div className="action-buttons flex justify-between">
        <input type="checkbox" name="completed" checked={task.completed} />
        <div className="flex gap-2">
          <button className="edit font-bold px-3 rounded-md bg-[#22333B]" onClick={handleOpen}>Edit</button>
          <button className="delete font-bold px-3 rounded-md bg-[#22333B]" onClick={() => handleDelete(task.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

TaskCard.propTypes = {
  task: PropTypes.object,
  handleDelete: PropTypes.func,
  handleUpdate: PropTypes.func,
};

export default TaskCard;
