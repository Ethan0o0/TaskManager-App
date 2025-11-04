import {Request, Response} from 'express'
import supabase from '../database/supabase-client'

export const getTaskController = async (req: Request, res: Response) => {

    // console.log(req.params.filter)
    const filterData = req.params.filter;
    if (filterData !== 'completed' && filterData !== 'uncompleted'){
        let {data, error} = await supabase
        .from("tasks")
        .select("*")
        .eq("user_id", req.body.id)

        if (error){
            console.log("Error getting tasks", error)
        }
    
        res.status(200).json(data);
    }
    else {
        let {data, error} = await supabase
        .from("tasks")
        .select("*")
        .eq("user_id", req.body.id)
        .eq("completed", filterData === 'completed' ? true : false)

        if (error){
            console.log("Error getting tasks", error)
        }
    
        res.status(200).json(data);
    }

}