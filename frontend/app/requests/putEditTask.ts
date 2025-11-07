
export default async function EditTask(event: React.FormEvent<HTMLFormElement>, token: string, task_id: number){

    const formData: FormData = new FormData(event.currentTarget)
    const task = formData.get("task") as string
    
    try {
    const response = await fetch('https://taskmanager-app-48jr.onrender.com/edittask', {
        method: 'PUT',
        headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
        },
        credentials: 'include',
        body: JSON.stringify({task: task, id: task_id})
    })

    if (!response.ok){
        throw new Error('HTTP error')
    }
    
    // const result = await response.json();
    // console.log("Success in updating the backend")

    }
    catch(e){
    console.error(`Error:`, e);
    }
}