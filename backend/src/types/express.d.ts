// src/types/express.d.ts
import { AuthTokenPayload } from "./auth";

declare global {
  namespace Express {
    export interface Request {
      user?: AuthTokenPayload; // or whatever your token payload type is
    }
  }
}
