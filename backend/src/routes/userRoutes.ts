import { Router, Request, Response } from 'express'
import authenticateToken from '../middlewares/authenticatetoken';
import { getTaskController } from '../controllers/getTaskController';
import { getSignUpData } from '../controllers/signupController'
import { verifyLogin } from '../controllers/loginController';
import { getLoginStatus } from '../controllers/getLoginStatusController';
import { putCompleted } from '../controllers/putCompletedController';

export const router: Router = Router();

router.get('/alltasks/:filter', authenticateToken, getTaskController)
router.post('/signup', getSignUpData)
router.post('/api/login', verifyLogin)
router.get('/api/me', authenticateToken, getLoginStatus)
router.put('/completed', authenticateToken, putCompleted)