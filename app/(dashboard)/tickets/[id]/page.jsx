export const dynamicParams = true
import { notFound } from "next/navigation"
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
  
  export async function generateMetadata({params}){
    const {id} = params
    return {
      title : `U Help | ${id}`
    }
  }

async function getTickets(id){
  const supabase = createServerComponentClient({ cookies })

  const { data } = await supabase.from('tickets')
    .select()
    .eq('id', id)
    .single()

    if (!data) {
      notFound()
    }
  
    return data
}
export default async function TicketDetails({params}) {
    const {id} = params
    const ticket = await getTickets(id)
  return (
    <main>
        <nav>
            <h2>Ticket Details:</h2>
        </nav>
        <div className="card">
            <h3>{ticket.title}</h3>
            <small>Created by {ticket.user_email}</small>
            <p>{ticket.body}</p>
            <div className={`pill ${ticket.priority}`}>
            {ticket.priority} priority
          </div>
        </div>
    </main>
  )
}
