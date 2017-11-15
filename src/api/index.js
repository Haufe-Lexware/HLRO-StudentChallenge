import express from 'express';
import { MongoClient, ObjectID } from 'mongodb';
import assert from 'assert';



const router = express.Router();

router.get('/tickets', (req, resp) =>{
  let tickets = {};
  console.log('In /tickets')
});

router.get('/tickets/{ticket_id}', (req, resp) =>{
  let tickets = {};
  console.log('In /tickets/tickets_id')
});

export default router;
