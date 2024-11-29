import Users from "./components/Users"
import UsersTable from "./components/UsersTable"
function App() {
  let userData = [
    {
      name: "Ram",
      id: 546,
      age: 43,
      gender: "Male",
    },
    {
      name: "Abhi",
      id: 656,
      age: 23,
      gender: "Male",
    },
    {
      name: "Raj",
      id: 989,
      age: 54,
      gender: "Male",
    },
  ];


  return (
    <div>
      <Users/>
      <UsersTable userData={userData}/>
    </div>
  )
}

export default App


