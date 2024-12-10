import PropTypes from "prop-types";
import { useState } from "react";

const TaskInput = ({ handleAdd }) => {
    const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(description.trim().length == 0) 
      return

    const task = {
      id: Math.floor(Math.random() * 1000) + 1,
      description,
      time: Date.now(),
      complete: false,
    }
    handleAdd(task);

    setDescription("");

  };

  return (
    <form className="flex p-6 shadow-xl" onSubmit={(e) => handleSubmit(e)}>
      <input
        className="w-[70%] text-xl p-3 ml-4"
        type="text"
        placeholder="Enter task..."
        onChange={(e) => setDescription(e.target.value)}        
        value={description}
      />

      <button className="ml-2 bg-[#22333B] text-white px-5" type="submit">
        Add
      </button>
    </form>
  );
};

TaskInput.propTypes = {
  handleAdd: PropTypes.func,
};

export default TaskInput;
