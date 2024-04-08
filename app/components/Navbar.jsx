import Link from 'next/link'
export default function Navbar() {
  return (
    <div>
      <h1>U Help</h1>
      <Link href='/'> Home</Link>
      <Link href='/tickets'> Tickets</Link>
    </div>
  )
}
