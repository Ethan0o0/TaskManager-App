'use client'
import { Tasks } from "../types/types"
import HandleCompleted from "@/app/requests/putCompleted"
import DeleteTask from "../requests/deleteTasks";

export default function TaskList(props : any){

    //HANDLER FUNCTION
    function checkboxHandler(completed: boolean, task_id: number) : void {
        if (!props.token) return;
        HandleCompleted(props.token, completed, task_id);
    }

    function handleDelete(id: number): void {
        DeleteTask(props.token, id)
        props.stateHandler();
    }
    
    const allTasks: [] = props.alltasks ? props.alltasks.map( (currentTask: Tasks) => {
        return(
            <li id={(currentTask.id).toString()} key={(currentTask.id).toString()}>
                <div id='task-description'>{currentTask.description}</div>
                <div className='task-buttons'>
                    <input type='checkbox' id='completed' name='completed' defaultChecked={currentTask.completed} onChange={(e) => {checkboxHandler(e.target.checked, currentTask.id)}}/>
                    <button onClick={() => {props.btnHandler(currentTask.id); props.editHandle(currentTask.id)}}>Edit</button>
                    <button onClick={() => {handleDelete(currentTask.id)}}>Delete</button>
                </div>
            </li>
        )
    }) : []

    return(
        <>
            <div className="tasklist-container">
                <h2 id='task-title'>Task List</h2>
                <ul className="task-list">
                    {allTasks}
                </ul>
            </div>
        </>
    )
}