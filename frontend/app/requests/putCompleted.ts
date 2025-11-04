import { Tasks } from "../types/types"
export default async function HandleSignup(token: string, isChecked: boolean, task_id: number){

    // console.log(token);
    
      try {
        const response = await fetch('http://localhost:5020/completed', {
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
        console.log("Success in updating the backend")
  
      }
      catch(e){
        console.error(`Error:`, e);
      }
}