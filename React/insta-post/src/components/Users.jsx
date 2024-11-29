import User from "./User";

const Users = () => {
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

  // userData = [];

  return (
    <div>
      Users
      <div>
        {/* ! Rendering from array */}
        {/* <User user={userData[0]} />
        <User user={userData[1]} />
        <User user={userData[2]} /> */}

        {/* Conditional Rendering */}
        {userData.length == 0
          ? "Data not available!!!"
          : userData.map((user) => {
              return <User key={user.id} user={user} />;
            })}
      </div>
    </div>
  );
};

export default Users;
