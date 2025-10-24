import {Request, Response} from 'express'
import supabase from '../database/supabase-client'

export const getTaskController = async (req: Request, res: Response) => {
    const {data, error} = await supabase
        .from("tasks")
        .select("*")

    if (error){
        console.log("Error getting tasks", error)
    }

    res.status(200).json(data);
}