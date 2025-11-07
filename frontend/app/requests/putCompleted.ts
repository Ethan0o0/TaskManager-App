import { Tasks } from "../types/types"
export default async function HandleCompleted(token: string, isChecked: boolean, task_id: number){

    // console.log(token);
    
      try {
        const response = await fetch('https://job-tracker-app-72g4.onrender.com/completed', {
          method: 'PUT',
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          credentials: 'include',
          body: JSON.stringify({completed: isChecked, id: task_id})
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