import './css/globals.css'
import Link from 'next/link'
import './css/navBar.css'
import LogoImage from '@/public/clipboard.png'
import Image from 'next/image'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className='navBarContainer'>
          <nav className='navBar'>
            <div className='logoTitleContainer'>
              <Link href='/'><Image src={LogoImage} alt="task-logo" id='task-logo' /></Link>
              <h1 id='mainTitle'>The Task Manager</h1>
            </div>
            <div className='logAndSign'>
              <Link href='/signup'><h2 id='link'>Sign Up</h2></Link>
              <Link href='/login'><h2 id='link'>Log In</h2></Link>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
