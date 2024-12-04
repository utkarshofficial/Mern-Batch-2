import TaskCard from "./TaskCard";
import PropTypes from "prop-types"

const TaskList = ({taskList, handleDelete}) => {

  
  return (
    <div>
      {taskList.map((task) => (
        <TaskCard task={task} key={task.id} handleDelete={handleDelete}/>
      ))}
    </div>
  );
};

TaskList.propTypes = {
    taskList: PropTypes.array,
    handleDelete: PropTypes.func,
}

export default TaskList;
