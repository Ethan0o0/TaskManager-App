export default async function DeleteTask(token: string, task_id: number){

    // console.log(token);
    
      try {
        const response = await fetch('https://job-tracker-app-72g4.onrender.com/delete', {
          method: 'DELETE',
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          credentials: 'include',
          body: JSON.stringify({id: task_id})
        })
  
        if (!response.ok){
            throw new Error('HTTP error')
        }
        
        // const result = await response.json();
        console.log("Success in sending ID to backend")
  
      }
      catch(e){
        console.error(`Error:`, e);
      }
}