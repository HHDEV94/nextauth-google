'use client'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'

function Navbar() {
  const { data: session } = useSession()

  return (
    <nav className='bg-slate-900 flex justify-between items-center px-20 py-5 text-white'>
      <Link href={'/'}>NextAuth - Google</Link>
      {session?.user?.name ? (
        <div className='flex gap-4 items-center'>
          <Link href={'/dashboard'}>Dashboard</Link>
          <h2>{session.user.name}</h2>
          <p>{session.user.email}</p>
          <Image
            src={session.user.image || '/noavatar.png'}
            alt='user_image'
            width={40}
            height={40}
            className='rounded-lg'
          />
          <button
            onClick={() => signOut()}
            className='bg-red-800 hover:bg-red-500 px-3 py-1 rounded-md'
          >
            SignOut
          </button>
        </div>
      ) : (
        <button
          onClick={() => signIn()}
          className='bg-blue-800 hover:bg-blue-500 px-3 py-1 rounded-md'
        >
          SignIn
        </button>
      )}
    </nav>
  )
}

export default Navbar
