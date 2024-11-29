import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0)

  const handleDec = ()=>{
    setCount(count - 1);
    console.log(count)
  }
  const handleInc = ()=>{
    setCount(count + 1)
    console.log(count)
  }
  const handleReset = ()=>{
    setCount(0)
    console.log(count)
  }
  
  return (
    <div>
      <h1> { count } </h1>
      <button onClick={handleDec}> - </button>
      <button onClick={handleReset}> Reset </button>
      <button onClick={handleInc}> + </button>
    </div>
   );
}
 
export default Counter;