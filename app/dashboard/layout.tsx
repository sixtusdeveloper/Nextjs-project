import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
        <header>
            <nav>
            <ul>
                <li>
                <a href='/'>Home</a>
                </li>
                <li>
                <a href='/about'>About</a>
                </li>
                
            </ul>
            </nav>
        </header>
        {children}
    </div>
  )
}

export default Layout