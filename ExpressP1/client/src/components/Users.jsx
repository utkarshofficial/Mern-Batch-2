import React, { useEffect } from 'react'
import axios from 'axios'
import User from './User'

const Users = () => {

    const [users, setUsers] = React.useState([])

    useEffect(()=>{
        const apiURL = "http://localhost:5500/users"
        axios.get(apiURL)
        .then(res=>{
            setUsers(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    

    
  return (
    <ul>
        {users.map(user=><User  key={user.id} user={user}/>)}
    </ul>
  )
}

export default Users