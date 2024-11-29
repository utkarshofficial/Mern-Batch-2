import PropTypes from "prop-types"

const User = (props) => {

  return (
    <div>
      <ul>
        <li>Name: {props.user.name}</li>
        <li>ID: {props.user.id}</li>
        <li>Age: {props.user.age}</li>
        <li>Gender: {props.user.gender}</li>
      </ul>
      {/* Static data */}
      {/* <ul>
        <li>No. 2</li>
        <li>Name: Abhi</li>
        <li>ID: 6554</li>
        <li>Age: 12</li>
        <li>Gender: Male</li>
      </ul>
      <ul>
        <li>No. 1</li>
        <li>Name: Ram</li>
        <li>ID: 456</li>
        <li>Age: 56</li>
        <li>Gender: Male</li>
      </ul> */}
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object
}

export default User;
