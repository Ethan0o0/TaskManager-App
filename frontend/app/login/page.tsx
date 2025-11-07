'use client'
import '@/app/css/login.css'
import { useRouter } from "next/navigation";
import handleLogin from "@/app/requests/postLogin"
import { useState } from 'react';

export default function Login(){

    const router = useRouter();
    const [loginError, setLoginError] = useState("")

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        const loginValue = await handleLogin(event, router)
        if (loginValue){
            setLoginError(loginValue.error);
        }
        else{
            setLoginError("")
        }
        
        // window.location.reload()
    }

    return(
        <div className="login-form-container">
            <h1>Login</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label><br />
                    <input type="text" id="email" name="email"/>
                </div>
                <div>
                    <label htmlFor="password">Password</label><br />
                    <input type="password" id='password' name='password'/>
                </div>
                <input type="submit" value='submit' id='submit-button'/>
            </form>
            <p>{loginError}</p>
        </div>
    )
}