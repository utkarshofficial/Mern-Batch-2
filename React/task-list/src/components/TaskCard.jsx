import PropTypes from "prop-types";
import Popup from "./Popup";
import { useState } from "react";

const TaskCard = ({ task, handleDelete, handleUpdate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [popupFor, setPopupFor] = useState("View");
  const [completed, setCompleted] = useState(task.complete);

  
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const convertTime = (taskTime)=>{
    const time = new Date().getTime() - new Date(taskTime).getTime();
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    if (seconds < 60) {
      return `${seconds} sec ago`;
    }
    else if (minutes < 60) {
      return `${minutes} min ago`;
    } else if (hours < 24) {
      return `${hours} hr ago`;
    } else {
      return `${days} day ago`;
    }
    
  }

  const checkReadMore = (description) => {
    if (description.length > 100) {
      return description.slice(0, 100) + "...";
    }
    return description;
  };

  return (
    <>
      {isOpen && (
        <Popup
          isOpen={isOpen}
          handleClose={handleClose}
          task={task}
          handleSubmit={handleUpdate}
          popupFor={popupFor}
        />
      )}
      <div
        onClick={() => {
          setPopupFor("View");
          handleOpen();
        }}
        className="task-card text-white m-3 p-3 bg-[#5E503F] rounded-lg"
      >
        <div className="task-header flex justify-between">
          <p className="text-xs font-bold">Task Description</p>
          <span className="text-xs">{convertTime(task.time)}</span>
        </div>
        <div className="content text-xl">
          <p>{checkReadMore(task.description)}</p>
        </div>
        <div className="action-buttons flex justify-between">
          <input
            className="w-4 h-4"
            type="checkbox"
            name="completed"
            checked={completed}
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => {
              setCompleted(e.target.checked);
              handleUpdate({ ...task, complete: e.target.checked });
            }}
          />
          <div className="flex gap-2">
            <button
              className="edit font-bold px-3 rounded-md bg-[#22333B]"
              onClick={(e) => {
                setPopupFor("Update");
                e.stopPropagation();
                handleOpen();
              }}
            >
              Edit
            </button>
            <button
              className="delete font-bold px-3 rounded-md bg-[#22333B]"
              onClick={() => handleDelete(task.id)}
            >
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
