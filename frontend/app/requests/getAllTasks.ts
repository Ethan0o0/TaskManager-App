export default async function GetAllTasks(token: string, filterData: string){
    // const token = localStorage.getItem('token')
    console.log("This is the get request for tasks")

    const response = await fetch(`http://localhost:5020/alltasks/${filterData}`, {
        headers: {'Authorization': `Bearer ${token}` || ""},
        credentials: 'include'
    })

    if (response.status == 401){
        console.log("Authentication Required")
        return;
    }

    if (!response.ok){
        throw new Error('Caught error at fetching all tasks')
    }
    const result = await response.json()
    // console.log(result)
    return result;
}