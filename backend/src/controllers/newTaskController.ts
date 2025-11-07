import {Request, Response} from 'express'
import supabase from '../database/supabase-client'

export const AddNewTask = async (req: Request, res: Response) => {

    const {error} = await supabase
        .from("tasks")
        .insert([{user_id: req.user?.id, description: req.body.description.toLowerCase(), completed: req.body.completed}])
        .select()

    if (error){
        console.log("Error adding task", error)
    }

    try{
        // console.log(req.body)
        res.status(200).json({message: "Successfully added the task"})
    }
    catch(e){
        console.error("Error in add task controller", e);
        res.status(500).json({error: "Internal server error"})
    }
    
}