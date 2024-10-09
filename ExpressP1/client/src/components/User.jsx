import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import PropTypes from 'prop-types'

const User = (props) => {
  const { id } = useParams();
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({
    ...props.user,
  });

  const fetchUser = () => {
    if(props.user !== undefined){
      setLoading(false)
      return
    }

    let apiURL = `http://localhost:5500/users/${id}`;

    axios
      .get(apiURL)
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(fetchUser, []);

  // const {id, name, age, username, password} = user
  let divStyle = {
    margin: "10px",
    background: "gray",
  };
  let spanStyle = {
    color: "lime",
    fontSize: "17px",
    fontWeight: "bold",
  };

  const SpinnerCompo = (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );

  const handleClick = () =>{
    navigate(`/users/${user.id}`)
  }

  return (
    <div>
      {loading ? (
        SpinnerCompo
      ) : (
        <div onClick={handleClick} style={divStyle}>
          <li>
            ID: <span style={spanStyle}>{user.id}</span>
          </li>
          <li>
            Name: <span style={spanStyle}>{user.name}</span>
          </li>
          <li>
            Age: <span style={spanStyle}>{user.age}</span>
          </li>
          <li>
            Username: <span style={spanStyle}>{user.username}</span>
          </li>
          <li>
            Password: <span style={spanStyle}>{user.password}</span>
          </li>
        </div>
      )}
    </div>
  );
};

User.propTypes = {
  user: PropTypes.object,
}

export default User;
