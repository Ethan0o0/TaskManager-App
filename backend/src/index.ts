import express, {Application, Request, Response} from 'express'
import {router} from './routes/userRoutes'
import errorHandler from './middlewares/errorHandler';

const app: Application = express();
const PORT: number = 5020;

app.use('/', router)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Running Server on Port: ${PORT}`)
})