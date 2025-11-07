
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

    if (response.status == 401){
        return {error: "INVALID PASSWORD OR EMAIL"}
    }

    if (!response.ok){
        return {error: "SERVER ERROR"}
    }

    const result = await response.json();
    localStorage.setItem('user', result.name)
    localStorage.setItem('token', result.token)
    window.location.href = '/';

    }
    catch(e){
    console.error(`Error:`, e);
    }
}