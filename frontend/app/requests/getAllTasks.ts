export default async function GetAllTasks(token: string, filterData: string){
    // const token = localStorage.getItem('token')
    // console.log("This is the get request for tasks")

    const response = await fetch(`https://job-tracker-app-72g4.onrender.com/alltasks/${filterData}`, {
        headers: {'Authorization': `Bearer ${token}` || ""},
        credentials: 'include'
    })

    if (response.status == 401){
        return {error: "UNAUTHORIZED"}
    }

    if (response.status == 403) {
        return {error: "TOKEN_EXPIRED"}
    }

    if (!response.ok){
        return {error: "SERVER_ERROR"}
    }
    
    const result = await response.json()
    return result;
}