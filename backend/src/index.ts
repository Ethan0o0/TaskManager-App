import express, {Application, Request, Response} from 'express'
import {router} from './routes/userRoutes'
import cors from 'cors'

const app: Application = express();
const PORT: number = 5020;

app.use(cors({
    origin: 'http://localhost:3000',
    credentials:true,
}))

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use('/', router)

app.listen(PORT, () => {
    console.log(`Running Server on Port: ${PORT}`)
})