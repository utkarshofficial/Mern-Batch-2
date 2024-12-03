import TaskCard from "./components/TaskCard";

function App() {
  let taskList = [
    {
      id: 1,
      description: "India",
      time: "12:00 PM",
      completed: false,
    },
    {
      id: 2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veritatis a aperiam facilis beatae aliquid.",
      time: "8:50 PM",
      completed: false,
    },
  ];

  return (
    <div>
      {taskList.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
}

export default App;
