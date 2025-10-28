import { Router, Request, Response } from 'express'
import { getTaskController } from '../controllers/getTaskController';
import { getSignUpData } from '../controllers/signupController'

export const router: Router = Router();

router.get('/alltasks', getTaskController)
router.post('/signup', getSignUpData)