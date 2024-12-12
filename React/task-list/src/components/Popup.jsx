import { useState } from "react";
import PropTypes from "prop-types";

const Popup = ({ isOpen, handleClose, handleSubmit, task, popupFor }) => {
  const [description, setDescription] = useState(task.description);

  const forUpdate = popupFor == "Update"
    
  const handleOk = () => {
    const newTask = {
      ...task,
      description,
      time: Date.now(),
    }
    
    handleSubmit(newTask);
    handleClose();
  };

  let popupProp = {
    title: forUpdate ? "Update" : "View",
    buttonText: forUpdate ? "Update" : "Close",
    handleBtnClick: forUpdate ? handleOk : handleClose
  }

  return (
    isOpen && (
      <div className="w-[100%] h-[100%] fixed top-0 left-0 bg-[#000000a3]">
        <div className="w-[400px] h-[200px] bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg p-3 flex flex-col">
          <div className="flex justify-between mb-1">
            <p className="font-bold text-center w-full text-xl">{popupProp.title} Note</p>
            <button className="text-xl" onClick={handleClose}>
              x
            </button>
          </div>
          <textarea
            readOnly={!forUpdate}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="m-auto p-2 w-[80%] border"
            placeholder="Enter task..."
          ></textarea>
          <button
            className="m-auto p-2 w-[80%] bg-[#22333B] rounded-lg text-white"
            onClick={popupProp.handleBtnClick}
          >
            {popupProp.buttonText}
          </button>
        </div>
      </div>
    )
  );
};

Popup.propTypes = {
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func,
  handleSubmit: PropTypes.func,
  task: PropTypes.object,
  popupFor: PropTypes.string,
};

export default Popup;
