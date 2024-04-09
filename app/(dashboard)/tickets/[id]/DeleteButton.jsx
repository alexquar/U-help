'use client'
import { useState } from "react"
import {TiDelete} from 'react-icons/ti'
export default function DeleteButton({id}) {
    const [isPending, setIsPending]= useState(false)
    const handleClick = async () => {
        setIsPending(true)

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
