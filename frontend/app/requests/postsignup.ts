
export default async function HandleSignup(event: React.FormEvent<HTMLFormElement>){

    event.preventDefault();
    const formData: FormData = new FormData(event.currentTarget)
    const objectFormData = Object.fromEntries(formData.entries())
    const {name, email, password, confirmPassword} = objectFormData;
    const signUpData = {name, email, password};

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return; // stop execution
      }

      try {
        const response = await fetch('http://localhost:5020/signup', {
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
  
        const result = await response.json();
        // router.push('/login')
  
      }
      catch(e){
        console.log(`Error:`, e);
      }
}