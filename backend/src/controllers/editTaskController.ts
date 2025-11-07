import {Request, Response} from 'express'
import supabase from '../database/supabase-client'

export const EditTask = async (req: Request, res: Response) => {

    // console.log(req.body)
    const {error} = await supabase
        .from("tasks")
        .update({description: req.body.task})
        .eq("id", req.body.id)

    if (error){
        console.log("Error updating edit task", error)
    }

    try{
        // console.log(req.body)
        res.status(200).json({message: "Successfully got the request for updating task"})
    }
    catch(e){
        console.error("Error in controller put edit task", e);
        res.status(500).json({error: "Internal server error"})
    }
    
}