import Link from 'next/link'
export default function AuthLayout({children}) {
  return (
    <>
    <nav>
        <h1>U Help</h1>
        <Link href="/signup">Sign up</Link>
        <Link href="/login">Login</Link>
      </nav>
      {children}
    </>
  )
}
