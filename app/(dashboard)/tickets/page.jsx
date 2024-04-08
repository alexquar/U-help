import { Suspense } from "react";
import TicketList from "./TicketLIst";
import Loading from "../loading";
import Link from 'next/link'
export default function Tickets() {
  return (
    <div>
      <h2>Tickets</h2>
      <Suspense fallback={<Loading />}>
      <TicketList />
      </Suspense>
      <Link href='/tickets/create' className="btn btn-primary p-2">Create a ticket</Link>
    </div>
  )
}
