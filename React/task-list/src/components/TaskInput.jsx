const TaskInput = () => {
    const handleSubmit = (e)=>{
        e.preventDefault()
    }
    
    return ( 
        <form onSubmit={(e)=>handleSubmit(e)}>
            <input type="text" placeholder="Enter task..." name=""/>
            
            <button type="submit">Add</button>
        </form>
     );
}
 
export default TaskInput;