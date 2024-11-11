import {useTickets} from '../../hooks/useTickets';  

export const PendingTickets = () => {

  const {tickets}= useTickets();

  const pendingTickets= tickets.filter((ticket)=> ticket.status === 'unrealized');

  if(pendingTickets.length === 0){
    return <h1>No pending tickets</h1>
  }else{
    return (
      <div>
        {pendingTickets.map((ticket) => (
          <div key={ticket._id}>
            <h1>{ticket.title}</h1>
            <p>{ticket.description}</p>
          </div>
        ))}
      </div>)
  }
}
