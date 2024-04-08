"use client"

import AuthForm from "../AuthForm";

export default function Login() {
  const handleSubmit = (e,email,password) => {
    e.preventDefault()
  }
  return (
    <main>
        <h2 className="text-center">Login</h2>
        <AuthForm handleSubmit={handleSubmit} />
    </main>
  )
}
