import { Router, Request, Response } from 'express'
import { getTaskController } from '../controllers/getTaskController';
import { getSignUpData } from '../controllers/signupController'
import { verifyLogin } from '../controllers/loginController';

export const router: Router = Router();

router.get('/alltasks', getTaskController)
router.post('/signup', getSignUpData)
router.post('/api/login', verifyLogin)