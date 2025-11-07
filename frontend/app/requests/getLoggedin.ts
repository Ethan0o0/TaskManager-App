
export default async function isLoggedIn(){

    // console.log("Got into post request for /me")
    const token = localStorage.getItem('token')

    try{
        const response = await fetch('https://taskmanager-app-48jr.onrender.com/api/me', {
            headers: {'Authorization': `Bearer ${token}` || ""},
            credentials: 'include'
        })
        if (!response.ok){
            throw new Error('HTTP Error on IsLoggedIn')
        }

        const result = await response.json();

        return true;
    }
    catch(e){
        console.log("Error caught at checking if user is logged in ", e)
    }
}