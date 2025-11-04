import {Request, Response} from 'express'

export const getLoginStatus = async (req: Request, res: Response) => {
    res.status(200).json({message: "successfully authenticated"})
}