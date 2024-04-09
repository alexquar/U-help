import { NextResponse } from "next/server"



export async function POST(req){
    const ticket = await req.json()

    const res = await fetch('http://localhost:4000/tickets', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(ticket)
    })
  
    const newTicket = await res.json()
  
    return NextResponse.json(newTicket, {
      status: 201
    })
}