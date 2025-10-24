import { Router, Request, Response } from 'express'
import { getTaskController } from '../controllers/getTaskController';

export const router: Router = Router();

router.get('/alltasks', getTaskController)