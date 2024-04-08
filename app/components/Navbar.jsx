import Link from 'next/link'
import Image from 'next/image'
import Logo from './ticket-bg.png'
export default function Navbar() {
  return (
    <nav>
        <Image
        src={Logo}
        alt='logo'
        width={50}
        quality={100}
        placeholder='blur'
        />
      <h1>U Help</h1>
      <Link href='/'> Home</Link>
      <Link href='/tickets'> Tickets</Link>
    </nav>
  )
}
