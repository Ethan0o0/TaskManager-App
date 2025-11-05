import {Request, Response} from 'express'
import supabase from '../database/supabase-client'

export const putCompleted = async (req: Request, res: Response) => {

    // console.log(req.body)
    const {error} = await supabase
        .from("tasks")
        .update({completed: req.body.completed})
        .eq("id", req.body.id)

    if (error){
        console.log("Error updating completed checkbox", error)
    }

    try{
        // console.log(req.body)
        res.status(200).json({message: "Successfully got the request for updating completed"})
    }
    catch(e){
        console.error("Error in controller put completed", e);
        res.status(500).json({error: "Internal server error"})
    }
    
}