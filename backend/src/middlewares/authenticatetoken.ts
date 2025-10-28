import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config({path: path.resolve(__dirname, '../../.env')});
import path from 'path'
import {Response, Request, NextFunction} from 'express' 
import { Secret } from 'jsonwebtoken';

export default function authenticateToken(req: Request, res: Response, next: NextFunction){
    const token = req.headers['access-token'] as string

    if (!token){
        return res.status(401).json({message: 'Authentication Required'})
    }

    jwt.verify(token, process.env.SECRET as Secret, (err, user) => {
        if (err){
            return res.status(403).json({message: "Invalid or Expired Token"})
        }

        req.user = user;
        next();
    })
}