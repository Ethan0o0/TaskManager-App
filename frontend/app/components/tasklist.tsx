'use client'
import { Tasks } from "../types/types"
import HandleSignup from "@/app/requests/putCompleted"

export default function TaskList(props : any){

    //HANDLER FUNCTION
    function checkboxHandler(completed: boolean, task_id: number) : void {
        if (!props.token) return;
        HandleSignup(props.token, completed, task_id);
    }
    
    const allTasks: [] = props.alltasks ? props.alltasks.map( (currentTask: Tasks) => {
        return(
            <li id={(currentTask.id).toString()} key={(currentTask.id).toString()}>
                <div id='task-description'>{currentTask.description}</div>
                <div className='task-buttons'>
                    <input type='checkbox' id='completed' name='completed' defaultChecked={currentTask.completed} onChange={(e) => {checkboxHandler(e.target.checked, currentTask.id)}}/>
                    <button onClick={props.btnHandler}>Edit</button>
                    <button>Delete</button>
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