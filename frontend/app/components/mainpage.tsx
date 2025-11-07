'use client'
import '@/app/css/mainpage.css'
import TaskList from './tasklist'
import FormAndFilter from './form-filter'
import EditTaskForm from './edit-task'
import { useState, useEffect } from 'react'
import { Tasks } from '../types/types'
import GetAllTasks from '../requests/getAllTasks'

export default function MainPage(props: any){

    //STATES
    const [isPopUp, setIsPopUp] = useState<Boolean>(false);
    const [tasks, setTasks] = useState<Tasks[]>([]);
    const [filterData, setFilterData] = useState<string>('all');
    const [token, setToken] = useState<string | null>(null);
    const [taskState, setTaskState] = useState<number>(0);
    const [editTaskID, setEditTaskID] = useState<number>(0);

    //USE EFFECT FOR FETCHING
    useEffect( () => {
        
        setToken(localStorage.getItem('token'));
        const temp_token = localStorage.getItem('token')
        if (!temp_token) return;

        GetAllTasks(temp_token, filterData).then((data) => {
            setTasks(data);
        });
    }, [filterData, taskState])

    //FUNCTIONS FOR HANDLING
    //FIX THIS TMRW
    function handlePopup(id: number) : void{
        setIsPopUp( (bool) => !bool);
    }
    function handleEditTask(id: number) : void{
        setEditTaskID(id);
    }
    function handleFilter(filteredData: string): void{
        setFilterData(filteredData);
    }

    function HandleDeleteState(){
        setTaskState((prevVal) => prevVal + 1);
    }

    return(
        <>
            <div className='dashboard-container'>
                <TaskList btnHandler={handlePopup} alltasks={tasks} token={token} stateHandler={HandleDeleteState} editHandle={handleEditTask}/>
                <FormAndFilter filterHandler={handleFilter} token={token} stateHandler={HandleDeleteState}/>
            </div>
            {isPopUp && <EditTaskForm btnHandler={handlePopup} stateHandler={HandleDeleteState} token={token} task_id={editTaskID}/>}
        </>
    )
}