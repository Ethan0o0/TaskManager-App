import AddNewTask from "../requests/postNewTask"

export default function FormAndFilter(props: any){

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        await AddNewTask(event, false, props.token)
        props.stateHandler();
    }

    return(
        <div className="form-filter-container">
            <form action="" className="add-task" onSubmit={handleSubmit}>
                <label htmlFor="task" id='task-form-label'>Add Task</label>
                <input type="text" id="task" name="description" placeholder='Ex: Become a SWE'/>
                <input type="submit" value='submit' id="task-submit-button" />
            </form>
            <div className='filter-container'>
                <label htmlFor="filter">Filter By</label>
                <select name="filter" id="filter" defaultValue='all' onChange={(e) => props.filterHandler(e.target.value)}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </div>
    )
}