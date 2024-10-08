import { useEffect, useState } from 'react'
import '../App.css'
import axios from 'axios'

function DateTime() {
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")

  useEffect(()=>{
    // const apiURL = "http://localhost:5500/date"
    // const apiURLforTime = "http://localhost:5500/time"
    const apiURLDateTime = "http://localhost:5500/datetime"

    function fetchData(){
      axios.get(apiURLDateTime,{
        headers: {
          "Content-Type": 'application/json'
        }
      })
      .then(res=>{
        setTime(res.data.time)
        setDate(res.data.date)
      })
      .catch(err=>{
        console.log(err)
      })
    }
    
    fetchData()
  }, [])

  return (
    <>
      Todays Date: <span style={{color: "lime"}}>{date}</span>
      <br />
      Current Time: <span style={{color: "lime"}}>{time}</span>
    </>
  )
}

export default DateTime
