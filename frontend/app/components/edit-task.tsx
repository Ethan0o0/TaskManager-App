import '@/app/css/edit-task.css'

export default function EditTaskForm(props : any){
    return(
        <div className='modal-overlay' onClick={props.btnHandler}>
            <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                <form action="" className="edit-task-form">
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