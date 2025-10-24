export default async function GetAllTasks(){
    const response = await fetch("http://localhost:5020/alltasks")
    if (!response.ok){
        throw new Error('Caught error at fetching all tasks')
    }
    const result = await response.json()
    return result;
}