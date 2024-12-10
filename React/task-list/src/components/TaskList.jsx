import TaskCard from "./TaskCard";
import PropTypes from "prop-types";

const TaskList = ({ taskList, handleDelete, handleUpdate }) => {
  return (
    <div className="h-[80%] overflow-auto">
      {taskList.map((task) => (
        <TaskCard
          task={task}
          key={task.id}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      ))}
    </div>
  );
};

TaskList.propTypes = {
  taskList: PropTypes.array,
  handleDelete: PropTypes.func,
  handleUpdate: PropTypes.func,
};

export default TaskList;
