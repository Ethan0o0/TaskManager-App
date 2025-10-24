//STARTING PAGE
import MainPage from "./components/mainpage"
import {Response} from 'express'
import GetAllTasks from "./requests/getAllTasks"
import { Tasks } from "./types/types"

export default async function Home() {

  //Data Fetching Variable
  const allTasks: Tasks[] = await GetAllTasks()


  return (
    <MainPage alltasks={allTasks}/>
  )
}
