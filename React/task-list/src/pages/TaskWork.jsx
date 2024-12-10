import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import { useState } from "react";

const TaskWork = () => {
  const taskData = [
    // generate 10 random task with keys (id, description, completed, time)
    { 
      id: 1, 
      description: "Task 1", 
      completed: false, 
      time: "10:00 AM" 
    },
    { id: 2, description: "Task 2", completed: false, time: "11:00 AM" },
    { id: 3, description: "Task 3", completed: false, time: "12:00 PM" },
    { id: 4, description: "Task 4", completed: false, time: "1:00 PM" },
    { id: 5, description: "Task 5", completed: false, time: "2:00 PM" },
    { id: 6, description: "Task 6", completed: false, time: "3:00 PM" },
    { id: 7, description: "Task 7", completed: false, time: "4:00 PM" },
    { id: 8, description: "Task 8", completed: false, time: "5:00 PM" },
    { id: 9, description: "Task 9", completed: false, time: "6:00 PM" },
  ]

  const [taskList, setTaskList] = useState(taskData);

  const handleDelete = (taskId) => {
    let newTask = taskList.filter((task) => {
      return taskId !== task.id;
    });
    setTaskList(newTask);
  };


  const handleAdd = (task) => {
    let newTaskList = [...taskList, task]
    setTaskList(newTaskList)
    
    // setTaskList([...taskList, task]);
  }

  const handleUpdate = (newTask) =>{
    let newTaskList = taskList.map(task=>{
      if(task.id === newTask.id){
        return newTask
      }
      return task
    })

    setTaskList(newTaskList)
  }

  return (
    <div className="bg-[#C6AC8F] w-[450px] m-auto h-[600px] rounded-2xl">
      <TaskInput 
        handleAdd={handleAdd}
      />
      <TaskList 
        handleDelete={handleDelete} 
        taskList={taskList} 
        handleUpdate={handleUpdate}
      />
    </div>
  );
};

export default TaskWork;
