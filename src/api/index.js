import express from 'express';
import { MongoClient, ObjectID } from 'mongodb';
import assert from 'assert';
import bodyParser from 'body-parser';


const router = express.Router();

router.get('/tickets', (req, res) =>{
  let tickets = [{a: 'g'}, {a:'u'}];
  console.log('In /tickets')
  res.send(tickets);
  return tickets;
});

router.get('/tickets/:ticket_id', (req, res) =>{
   const ticketId = req.params.ticket_id;
  let ticket = {
                  ticketId:'1',
                  ProblemType:'no more Coffee',
                  Severity:'High'
                };
  console.log('In /tickets/',ticketId);
  res.send(ticket);
});

const server = express();
server.use('/api', router);
server.use(express.static('public'));
server.use(bodyParser.json());

server.listen(4000, '0.0.0.0', () => {
  console.info('API server runni', 4000);
});

export default router;
