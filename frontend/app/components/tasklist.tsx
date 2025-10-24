import { Tasks } from "../types/types"

export default function TaskList(props : any){

    // function isChecked(completed: boolean) : string{
    //     return 
    // }
    const returnedTasks: Tasks[] = props.alltasks || [];
    const allTasks = returnedTasks.map( (currentTask: Tasks) => {
        return(
            <li>
                <div id='task-description'>{currentTask.description}</div>
                <div className='task-buttons'>
                    <input type='checkbox' id='completed' name='completed' checked/>
                    <button onClick={props.btnHandler}>Edit</button>
                    <button>Delete</button>
                </div>
            </li>
        )
    })

    return(
        <>
            <div className="tasklist-container">
                <h2 id='task-title'>Task List</h2>
                <ul className="task-list">
                    <li>
                        <div id='task-description'>Wash Sheets</div>
                        <div className='task-buttons'>
                            <input type='checkbox' id='completed' name='completed' />
                            <button onClick={props.btnHandler}>Edit</button>
                            <button>Delete</button>
                        </div>
                    </li>
                    <li>
                        <div id='task-description'>Eat Protein</div>
                        <div className='task-buttons'>
                            <input type='checkbox' id='completed' name='completed' />
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                    </li>
                    <li>
                        <div id='task-description'>Do Homework</div>
                        <div className='task-buttons'>
                            <input type='checkbox' id='completed' name='completed' />
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}