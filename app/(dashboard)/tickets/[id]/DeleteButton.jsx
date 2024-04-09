'use client'
import { useState } from "react"
import {TiDelete} from 'react-icons/ti'
import { useRouter } from "next/navigation"
export default function DeleteButton({id}) {
    const [isPending, setIsPending]= useState(false)
    const router = useRouter()
    const handleClick = async () => {
        setIsPending(true)
        const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
            method : 'DELETE'
        })    
        const json = await res.json()
        if(json.error){
            console/log(json.error.message)
            setIsPending(false)
        } else {
            router.refresh()
            router.push('/tickets')
        }
    }
  return (
    <button className="btn-primary"
    onClick={handleClick}
    disabled={isPending}
    >
      {isPending && <>
      <TiDelete />
      Deleting...
      </>}  
      {!isPending && <>
      <TiDelete />
      Delete Ticket
      </>} 
    </button>
  )
}
