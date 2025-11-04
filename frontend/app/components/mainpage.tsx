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

    //USE EFFECT FOR FETCHING
    useEffect( () => {
        
        setToken(localStorage.getItem('token'));
        const temp_token = localStorage.getItem('token')
        if (!temp_token) return;

        GetAllTasks(temp_token, filterData).then((data) => {
            setTasks(data);
        });
    }, [filterData])

    //FUNCTIONS FOR HANDLING
    function handlePopup() : void{
        setIsPopUp( (bool) => !bool);
    }
    function handleFilter(filteredData: string): void{
        setFilterData(filteredData);
    }

    return(
        <>
            <div className='dashboard-container'>
                <TaskList btnHandler={handlePopup} alltasks={tasks} token={token}/>
                <FormAndFilter filterHandler={handleFilter}/>
            </div>
            {isPopUp && <EditTaskForm btnHandler={handlePopup} />}
        </>
    )
}