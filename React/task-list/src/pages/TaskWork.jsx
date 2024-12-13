import { ToastContainer, toast } from "react-toastify";

import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";

import { useEffect, useState } from "react";

import 'react-toastify/dist/ReactToastify.css';

const TaskWork = () => {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTaskList(JSON.parse(storedTasks));
    }

  }, []);


  const toastOptions = {
    position: "bottom-right",
    theme: "dark",
  };

  const handleDelete = (taskId) => {
    let newTaskList = taskList.filter((task) => {
      return taskId !== task.id;
    });
    setTaskList(newTaskList);
    // update, edit, delete task
    localStorage.setItem("tasks", JSON.stringify(newTaskList));
    toast.success("Task deleted successfully", toastOptions);
  };


  const handleAdd = (task) => {
    let newTaskList = [...taskList, task]
    setTaskList(newTaskList)
    // update, edit, delete task
    localStorage.setItem("tasks", JSON.stringify(newTaskList));
    toast.success("Task added successfully", toastOptions);
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
    // update, edit, delete task
    localStorage.setItem("tasks", JSON.stringify(newTaskList));
    toast.info("Task updated successfully", toastOptions);
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
      <ToastContainer />
    </div>
  );
};

export default TaskWork;
