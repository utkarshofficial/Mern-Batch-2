import PropTypes from "prop-types"

const UserTable = ({user}) => {
    return ( 
      <tr>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.age}</td>
        <td>{user.gender}</td>
      </tr>
     );
}

UserTable.propTypes = {
  user: PropTypes.object
}
 
export default UserTable;