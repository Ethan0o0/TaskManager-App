
export default async function AddNewTask(event: React.FormEvent<HTMLFormElement>, completed_val: boolean, token: string){

  const formData: FormData = new FormData(event.currentTarget)
  const description = formData.get("description") as string
  
    try {
      const response = await fetch('http://localhost:5020/newtask', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        credentials: 'include',
        body: JSON.stringify({description: description, completed: completed_val})
      })

      if (!response.ok){
          throw new Error('HTTP error')
      }
      
      // const result = await response.json();
      console.log("Successfully sent over new task data")

    }
    catch(e){
      console.error(`Error:`, e);
    }
}