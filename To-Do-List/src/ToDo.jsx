import react, {useState} from 'react'
import './ToDo.css'
function ToDo(){
    const [tasks, setTasks] = useState(["Research flights for the summer vacation."]) 
    const [newTask, setNewtasks] = useState("")

    function handleInput(event){
        setNewtasks(event.target.value)
    }
    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(tasks =>([...tasks, newTask]))
            document.getElementById('input-value').value=""
            setNewtasks("")
        }
    }
    function deleteTask(index){
        const updatedTasks = tasks.filter((task,i)=> i!==index)
        setTasks(updatedTasks)
    }
    function moveUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    function moveDown(index){
        if(index < tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    return(
        <div id="todolist">
            <h1>To-Do-List</h1>
            <div className="main">
                <input type="text" id="input-value" onChange={handleInput} placeholder="Add a new task..."/>
                <button id="add-button" onClick={addTask}>Add</button>
                <ol className='orderedlist'>
                    <span className='list'>
                        {tasks.map((task, index)=> 
                            <li key={index}>
                                <span className='text'>{task}</span>
                                <div className="button-group">
                                    <button id="upButton" onClick={()=>moveUp(index)}>☝️</button>
                                    <button id="downButton" onClick={()=>moveDown(index)}>👇</button>
                                    <button id="delete-button"onClick={()=> deleteTask(index)}>delete</button>
                                </div>
                            </li>)}
                    </span>
                </ol>
            </div>
        </div>
    )
}
export default ToDo