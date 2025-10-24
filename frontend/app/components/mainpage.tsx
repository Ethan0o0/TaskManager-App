'use client'
import '@/app/css/mainpage.css'
import TaskList from './tasklist'
import FormAndFilter from './form-filter'
import EditTaskForm from './edit-task'
import { useState } from 'react'

export default function MainPage(props: any){

    //STATES
    const [isPopUp, setIsPopUp] = useState(false);

    function handlePopup() : void{
        setIsPopUp( (bool) => !bool);
    }

    //FIX THE ISSUE OF USING THE CLIENT HERE

    return(
        <>
            <div className='dashboard-container'>
                <TaskList btnHandler={handlePopup} all-tasks={props.alltasks}/>
                <FormAndFilter />
            </div>
            {isPopUp && <EditTaskForm btnHandler={handlePopup} />}
        </>
    )
}