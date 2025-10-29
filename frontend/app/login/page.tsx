import '@/app/css/login.css'

export default function Login(){
    return(
        <div className="login-form-container">
            <h1>Login</h1>
            <form className="login-form">
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