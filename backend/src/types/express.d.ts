// src/types/express.d.ts
import { JwtPayload } from 'jsonwebtoken';

declare global {
  namespace Express {
    export interface Request {
      user: {id: number, name: string} | JwtPayload; // or whatever your token payload type is
    }
  }
}
