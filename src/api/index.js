import express from 'express';
import assert from 'assert';
import bodyParser from 'body-parser';
import uuidv4 from 'uuid/v4';
import TicketsApi from './MongoClient';

const router = express.Router();

router.get('/tickets', (req, res) => {
  console.log('GET - tickets');

  TicketsApi.findAllTickets(function(err, dbTickets) {
    console.log('dbTickets = ', dbTickets);
    assert(null === err, 'Unable to get tickets error:' + err);
    res.send(dbTickets);
  });
  //  console.log('tickets found = ', tickets);
});

router.get('/tickets/:ticket_id', (req, res) => {
  const ticketId = req.params.ticket_id;
  console.log('GET - tickets/', ticketId);
  TicketsApi.findAllTickets(function(err, dbTickets) {
    console.log('dbTickets = ', dbTickets);
    assert(null === err, 'Unable to get tickets error:' + err);
    let match = dbTickets.find(function(ticket) {
      console.log('Tiket id= ',ticketId);
      console.log('Tiket = ',ticket);
      console.log('Checking ', ticket._id, ' against ', ticketId );
      let compare = ticket._id == ticketId;
      console.log('compare = ', compare);
      return compare;
    });
    console.log('Match = ', match);
    res.send(match);
  });
});

router.post('/tickets', function(req, res) {
  console.log('POST - tickets/')
  console.log(req.body);
  TicketsApi.createTicket(req.body, function(err, newTicket) {
    if (err) {
      console.log('Error on creating ticket: ', err);
      res.send(err);
    }
    res.send(newTicket);
  });
});

router.put('/tickets/:ticket_id', (req, res) => {
  const ticketId = req.params.ticket_id;
  console.log('UPDATE - tickets/', ticketId)
  res.send(
    tickets.find(ticket => ticket.ticketId === ticketId)
  );
});

router.delete('/tickets/:ticket_id', (req, res) => {
  const ticketId = req.params.ticket_id;
  console.log('DELETE - tickets/', ticketId)
  TicketsApi.deleteTicket(ticketId, function(err, deletedTicket) {
    console.log(err);
    if (err === null) {
      console.log('Deleted ticket', deletedTicket)
      res.send(deletedTicket);
    } else {
      console.log('Error deleting ticket ', ticketId, err);
      res.send(err);
    }
  });
})




const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
  extended: true
}));
server.use('/api', router);
server.use(express.static('public'));

server.listen(4000, '0.0.0.0', () => {
  console.info('API server runni', 4000);
});

export default router;
