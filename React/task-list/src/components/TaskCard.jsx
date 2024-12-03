import PropTypes from "prop-types" 

const TaskCard = ({task})=>{

  return (
      <div className="task-card">
        <div className="task-header">
          <p>Task Description</p>
          <span>{task.time}</span>
        </div>
        <div className="content">
          <p>{task.description}</p>
        </div>
        <div className="action-buttons">
          <input type="checkbox" name="completed" checked={task.completed}/>
          <div>
            <button className="edit">Edit</button>
            <button className="delete">Delete</button>
          </div>
        </div>
      </div>
  )
}

TaskCard.propTypes = {
  task: PropTypes.object
}

export default TaskCard