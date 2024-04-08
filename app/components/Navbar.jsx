import Link from 'next/link'
import Image from 'next/image'
import Logo from './ticket-bg.png'
import LogoutButton from './LogoutButton'
export default function Navbar({user}) {
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
      <Link className='mr-auto' href='/tickets'> Tickets</Link>
      {user && (<span>Hey, {user.email}</span>) }
      <LogoutButton />
    </nav>
  )
}
