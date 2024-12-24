import React from 'react'
import Link from 'next/link'

const Users = () => {
  return (
    <div>
      <h1>Dashboard Users</h1>
      <ul>
        <li><Link href="/dashboard/users/1">User one</Link></li>
        <li><Link href="/dashboard/users/2">User two</Link></li>
        <li><Link href="/dashboard/users/3">User three</Link></li>
        <li><Link href="/dashboard/users/4">User four</Link></li>
      </ul> 
    </div>
  )
}

export default Users