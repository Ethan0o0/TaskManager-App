'use client'
import Link from 'next/link'
import LogoImage from '@/public/clipboard.png'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import isLoggedIn from '../requests/getLoggedin'

export default function NavBar(){

  const [loggedIn, setLoggedIn] = useState(false)
  const [userName, setUserName] = useState<string | null>(null)
  
  useEffect(() => {

    if (localStorage.getItem('token')){
      handleLoginState()
      setUserName(localStorage.getItem('user'))
    }
  }, [])

  async function handleLoginState(){
    const userIsLoggedIn = await isLoggedIn();
    if (userIsLoggedIn){
      setLoggedIn(true)
    }
  }

  function handleLogout(){
    setLoggedIn(false);
    setUserName(null)
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.reload();

  }


  return(
      <header className='navBarContainer'>
        <nav className='navBar'>
          <div className='logoTitleContainer'>
            <Link href='/'><Image src={LogoImage} alt="task-logo" id='task-logo' /></Link>
            <h1 id='mainTitle'>The Task Manager</h1>
          </div>
          {
          loggedIn ? 
          <div className='userName-container'>
            <h2 id='userName'>{userName}</h2>
            <button id='logout-button' onClick={handleLogout}>Log Out</button>
            </div>
          :
          <div className='logAndSign'>
            <Link href='/signup'><h2 id='link'>Sign Up</h2></Link>
            <Link href='/login'><h2 id='link'>Log In</h2></Link>
          </div>
          }
        </nav>
      </header>
  )
}