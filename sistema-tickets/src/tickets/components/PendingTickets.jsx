import {useTickets} from '../../hooks/useTickets';  
import { TicketTable } from './TicketTable';
import { Box } from '@mui/material';

export const PendingTickets = () => {

  const {tickets}= useTickets();

  const sortedTickets= tickets.sort((a,b)=> new Date(b.date) - new Date(a.date));

  const pendingTickets= sortedTickets.filter((ticket)=> ticket.status === 'unrealized' || ticket.status === 'in progress');


  if(pendingTickets.length === 0){
    return <h1>No pending tickets</h1>
  }else{
    return (
      
      <Box>
        <TicketTable tickets={pendingTickets} />

      </Box>
    )
  }
}
