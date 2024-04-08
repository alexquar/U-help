import { Suspense } from "react";
import TicketList from "./TicketLIst";
import Loading from "../loading";

export default function Tickets() {
  return (
    <div>
      <h2>Tickets</h2>
      <Suspense fallback={<Loading />}>
      <TicketList />
      </Suspense>
    </div>
  )
}
