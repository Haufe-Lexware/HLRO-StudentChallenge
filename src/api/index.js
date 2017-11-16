import express from 'express';
import { MongoClient, ObjectID } from 'mongodb';
import assert from 'assert';
import bodyParser from 'body-parser';
import uuidv4 from 'uuid/v4';
var tickets = [
  {
    ticketId: uuidv4(),
    ticketTitle: 'Coffe Machine is broken',
    ticketDescription: 'I came this morning to work and it was broken.',
    ticketPriority: 'Medium',
    ticketCategory: 'Food & Drinks',
    ticketDate: '20.10.2017, 8:10',
    ticketSender: 'Mihai Golcea',
    ticketState: 'Pending'
  },
  {
    ticketId: uuidv4(),
    ticketTitle: 'Need a new Headset',
    ticketDescription: 'I dropped it on the floor and it stoppd working.',
    ticketPriority: 'Low',
    ticketCategory: 'Hardware',
    ticketDate: '19.10.2017, 14:12',
    ticketSender: 'Mihai Golcea',
    ticketState: 'Refused'
  },
  {
    ticketId: uuidv4(),
    ticketTitle: 'Water is not working',
    ticketDescription: 'Water stopped working at around 9 AM.',
    ticketPriority: 'High',
    ticketCategory: 'Utilities',
    ticketDate: '16.10.2017, 09:25',
    ticketSender: 'Ionut Popescu',
    ticketState: 'Solved'
  }
]
const router = express.Router();

router.get('/tickets', (req, res) =>{

  console.log('In /tickets')
  res.send(tickets);
  return tickets;
});

router.get('/tickets/:ticket_id', (req, res) =>{
  const ticketId = req.params.ticket_id;
  console.log('In /tickets/',ticketId);
  res.send(
    tickets.find(ticket => ticket.ticketId === ticketId)
  );
});

const server = express();
server.use('/api', router);
server.use(express.static('public'));
server.use(bodyParser.json());

server.listen(4000, '0.0.0.0', () => {
  console.info('API server runni', 4000);
});

export default router;
