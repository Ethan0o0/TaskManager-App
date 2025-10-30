'use client'
import '@/app/css/login.css'
import { useRouter } from "next/navigation";
import handleLogin from "@/app/requests/postLogin"

export default function Login(){

    const router = useRouter();

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        await handleLogin(event, router)
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
        </div>
    )
}