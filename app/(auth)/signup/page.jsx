"use client"
import AuthForm from "../AuthForm";


export default function Signup() {
  const handleSubmit = (e,email,password) => {
    e.preventDefault()
  }
  return (
    <main>
        <h2 className="text-center">Signup</h2>
        <AuthForm handleSubmit={handleSubmit}/>
    </main>
  )
}
