import axios from "axios"
import { useParams } from "react-router-dom"
const User = () => {
    let apiURL = "http://localhost:5500/users/:id"
    let user = undefined
    if(user == undefined){
        axios.get(apiURL)
        .then(res=>{
            user = res.data    
            console.log(user)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    // const {id, name, age, username, password} = user
    let divStyle = {
        margin: "10px",
        background: "gray",
    }
    let spanStyle = {
        color: "lime",
        fontSize: "10px",
        fontWeight: "bold"
    }    
  return (
    <div style={divStyle}>
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
  )
}

export default User