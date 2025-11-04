
export default async function handleLogin(event: React.FormEvent<HTMLFormElement>, router: any){
    const formData: FormData = new FormData(event.currentTarget)
    const {email, password} = Object.fromEntries(formData.entries())

    try {
    const response = await fetch('http://localhost:5020/api/login', {
        method: 'POST',
        headers: {
        "Content-Type": "application/json"
        },
        credentials: 'include',
        body: JSON.stringify({email, password})
    })

    //UNAUTHORIZED DATA HANDLING HERE
    //MUST ALSO ADD HANDLING FOR INVALID EMAIL
    if (response.status == 401){
        // console.log("PASSWORD OR EMAIL FAILED PLEASE TRY AGAIN")
        alert("PASSWORD OR EMAIL FAILED PLEASE TRY AGAIN")
    }

    if (!response.ok){
        throw new Error('HTTP error')
    }

    const result = await response.json();
    localStorage.setItem('user', result.name)
    localStorage.setItem('token', result.token)
    router.push('/')

    }
    catch(e){
    console.error(`Error:`, e);
    }
}