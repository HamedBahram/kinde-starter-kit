import Link from 'next/link'

export default function Home() {
  return (
    <section className='py-24'>
      <div className='container'>
        <div className='rounded-lg bg-black p-8 text-white'>
          <p className='text-3xl font-semibold'>
            Let’s start authenticating <br /> with KindeAuth
          </p>
          <p className='mb-3 mt-10 text-gray-400'>Configure your app</p>

          <Link
            href='https://kinde.com/docs/sdks/nextjs-sdk'
            className='rounded-md bg-white px-4 py-2 font-medium text-black'
            target='_blank'
            rel='noreferrer'
          >
            Go to docs
          </Link>
        </div>
      </div>
    </section>
  )
}
