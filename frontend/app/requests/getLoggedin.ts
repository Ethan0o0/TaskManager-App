

export default async function isLoggedIn(){

    // console.log("Got into post request for /me")
    const token = localStorage.getItem('token')

    try{
        const response = await fetch('http://localhost:5020/api/me', {
            headers: {'Authorization': `Bearer ${token}` || ""},
            credentials: 'include'
        })
        if (!response.ok){
            throw new Error('HTTP Error on IsLoggedIn')
        }

        const result = await response.json();
        console.log(result)

        return true;
    }
    catch(e){
        console.log("Error caught at checking if user is logged in ", e)
    }
}