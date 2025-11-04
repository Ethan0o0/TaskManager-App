export default function FormAndFilter(props: any){
    return(
        <div className="form-filter-container">
            <form action="" className="add-task">
                <label htmlFor="task" id='task-form-label'>Add Task</label>
                <input type="text" id="task" name="task" placeholder='Ex: Become a SWE'/>
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