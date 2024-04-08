import Link from 'next/link'
export default function Navbar() {
  return (
    <nav>
      <h1>U Help</h1>
      <Link href='/'> Home</Link>
      <Link href='/tickets'> Tickets</Link>
    </nav>
  )
}
