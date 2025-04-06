'use client'
import { signOut, useSession } from 'next-auth/react'

export const ProfileMenu = () => {
  const session = useSession()

  return (
    <div>
      <div>{session.data?.user?.name}</div>
      <div className='h-10' />
      <button onClick={() => signOut()}>Logout</button>
    </div>
  )
}