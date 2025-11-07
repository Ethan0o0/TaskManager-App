import '@/app/css/edit-task.css'
import EditTask from '../requests/putEditTask';

export default function EditTaskForm(props : any){

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        await EditTask(event, props.token, props.task_id)
        props.stateHandler();
    }

    return(
        <div className='modal-overlay' onClick={props.btnHandler}>
            <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                <form action="" className="edit-task-form" onSubmit={(e) => {handleSubmit(e); props.btnHandler()}}>
                    <div>
                        <label htmlFor="task">Edit Task</label><br />
                        <input type="text" id="task" name="task" />
                    </div>
                    <div className='button-row'>
                        <input type="submit" value='submit' id='submit-button'/>
                    </div>
                </form>
            </div>
        </div>
    )
}