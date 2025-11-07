import { Router, Request, Response } from 'express'
import authenticateToken from '../middlewares/authenticatetoken';
import { getTaskController } from '../controllers/getTaskController';
import { getSignUpData } from '../controllers/signupController'
import { verifyLogin } from '../controllers/loginController';
import { getLoginStatus } from '../controllers/getLoginStatusController';
import { putCompleted } from '../controllers/putCompletedController';
import { DeleteTask } from '../controllers/deleteTaskController';
import { AddNewTask } from '../controllers/newTaskController';
import { EditTask } from '../controllers/editTaskController';

export const router: Router = Router();

router.get('/alltasks/:filter', authenticateToken, getTaskController)
router.post('/signup', getSignUpData)
router.post('/api/login', verifyLogin)
router.post('/newtask', authenticateToken, AddNewTask)
router.get('/api/me', authenticateToken, getLoginStatus)
router.put('/completed', authenticateToken, putCompleted)
router.put('/edittask', authenticateToken, EditTask)
router.delete('/delete', authenticateToken, DeleteTask)