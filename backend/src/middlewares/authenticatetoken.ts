import jwt, { JwtPayload } from 'jsonwebtoken'
import dotenv from 'dotenv';
import path from 'path'
import {Response, Request, NextFunction} from 'express' 
import { Secret } from 'jsonwebtoken';
dotenv.config({path: path.resolve(__dirname, '../../.env')});

export default function authenticateToken(req: Request, res: Response, next: NextFunction){
    let token = req.headers['authorization'] as string
    token = token.split(' ')[1];

    if (!token){
        // console.log("TOKEN DID NOT EXIST SENDING 401")
        return res.status(401).json({message: 'Authentication Required'})
    }

    jwt.verify(token, process.env.SECRET as Secret, (err, user) => {
        if (err){
            return res.status(403).json({message: "Invalid or Expired Token"})
        }

        req.body = user as object;
        // console.log(req.body)
        next();
    })
}