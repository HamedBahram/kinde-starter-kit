import Link from 'next/link'

import {
  getKindeServerSession,
  RegisterLink,
  LoginLink
} from '@kinde-oss/kinde-auth-nextjs/server'

import UserButton from './UserButton'

function Header() {
  const { isAuthenticated, getUser } = getKindeServerSession()
  const user = getUser()

  return (
    <header className='py-10'>
      <nav className='container flex justify-between'>
        <Link href='/' className='text-3xl font-bold'>
          KindeAuth
        </Link>
        {!isAuthenticated() ? (
          <div className='flex gap-x-3'>
            <LoginLink className='rounded-md border px-3 py-1'>
              Sign in
            </LoginLink>
            <RegisterLink className='rounded-md border bg-black px-3 py-1 text-white'>
              Sign up
            </RegisterLink>
          </div>
        ) : (
          <UserButton user={user} isAuthenticated={isAuthenticated()} />
        )}
      </nav>
    </header>
  )
}

export default Header
