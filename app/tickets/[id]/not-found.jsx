import Link from 'next/link'

export default function notFound() {
  return (
    <div className='text-center'>
    <h2 className="text-3xl">Whoops!</h2>
      <p>We could not find the ticket you were looking for.</p>
      <p>Go back to all <Link href="/tickets" className='text-accent'>tickets</Link>.</p>
    </div>
  )
}
