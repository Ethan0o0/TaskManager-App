import {Request, Response} from 'express'
import supabase from '../database/supabase-client'

export const DeleteTask = async (req: Request, res: Response) => {

    // console.log(req.body)
    const {error} = await supabase
        .from("tasks")
        .delete()
        .eq("id", req.body.id)

    if (error){
        console.log("Error deleting task", error)
    }

    try{
        // console.log(req.body)
        res.status(200).json({message: "Successfully got the request for deleting task"})
    }
    catch(e){
        console.error("Error in controller delete task", e);
        res.status(500).json({error: "Internal server error"})
    }
    
}