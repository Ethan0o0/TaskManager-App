
export default async function HandleSignup(event: React.FormEvent<HTMLFormElement>, router: any){

    const formData: FormData = new FormData(event.currentTarget)
    const {name, email, password, confirmPassword} = Object.fromEntries(formData.entries())
    const signUpData = {name, email, password};

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return; // stop execution
      }
    
      try {
        const response = await fetch('https://taskmanager-app-48jr.onrender.com/signup', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          credentials: 'include',
          body: JSON.stringify(signUpData)
        })
  
        if (!response.ok){
            throw new Error('HTTP error')
        }
        
        // const result = await response.json();
        router.push('/login')
  
      }
      catch(e){
        console.error(`Error:`, e);
      }
}