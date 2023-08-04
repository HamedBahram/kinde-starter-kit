import { redirect } from 'next/navigation'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

export default function Dashboard() {
  const { isAuthenticated } = getKindeServerSession()

  if (!isAuthenticated()) {
    redirect('/api/auth/login')
  }

  return (
    <section className='py-24'>
      <div className='container'>
        <div className='rounded-lg bg-black p-8 text-white'>
          <h1 className='text-3xl font-bold'>Dashboard</h1>
        </div>
      </div>
    </section>
  )
}
