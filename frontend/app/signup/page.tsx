'use client'
import '@/app/css/signup.css'
import HandleSignup from '../requests/postsignup'
import { useRouter } from "next/navigation";

export default function SignUp(){

    const router = useRouter();

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        await HandleSignup(event, router)
    }

    return(
            <div className='signup-container'>
                <h1>SignUp</h1>
                <form className="signup-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label><br />
                        <input type="text" id="name" name="name" required/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label><br />
                        <input type="email" id="email" name="email" required/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label><br />
                        <input type="password" id="password" name="password" required/>
                    </div>
                    <div>
                        <label htmlFor="confirmPassword">Confirm Password</label><br />
                        <input type="password" id="confirmPassword" name="confirmPassword" required/>
                    </div>
                    <input type="submit" value='submit' id='submit-button'/>
                </form>
            </div>
    )
}