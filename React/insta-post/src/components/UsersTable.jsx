import PropTypes from "prop-types";
import UserTable from "./UserTable";

const UsersTable = ({ userData }) => {
  return (
    <div>
      Users Table
      <table border={2}>
        <thead>
          <th colSpan={4}>Users Data</th>
        </thead>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>

          {userData.length == 0
            ? "Data not found"
            : userData.map((user) => {
                return <UserTable key={user.id} user={user} />;
              })}
        </tbody>
      </table>
    </div>
  );
};

UsersTable.propTypes = {
  userData: PropTypes.array,
};

export default UsersTable;
