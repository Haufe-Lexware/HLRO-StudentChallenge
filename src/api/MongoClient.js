import mongoose, {
  Schema
} from 'mongoose';

const ticketSchema = Schema({
  ticketTitle: String,
  ticketDescription: String,
  ticketPriority: String,
  ticketCategory: String,
  ticketDate: String,
  ticketSender: String,
  ticketState: String
});
mongoose.connect('mongodb://localhost:27017/ticketsdb', {
  useMongoClient: true
}).on('error', console.error.bind(console, 'MongoDB connection error:'));

const TicketModel = mongoose.model('Ticket', ticketSchema);

const TicketsApi = {
  findAllTickets: function(functionToCallWhenMongoHasResultsForFindCall) {
    console.log('Start - findAllTickets');
    TicketModel.find({}, functionToCallWhenMongoHasResultsForFindCall);
  },

  createTicket: (ticket, functionToCallWhenMongoHasResultsForFindCall) => {
    console.log('Implement ticket save in mongo client')
    let newTicket = new TicketModel(ticket);
    newTicket.save(functionToCallWhenMongoHasResultsForFindCall);
  },
  updateTicket: (ticketId, ticket, functionToCallWhenMongoUpdatedTicket) => {
    TicketModel.findByIdAndUpdate(ticketId, ticket, {
      new: true
    }, functionToCallWhenMongoUpdatedTicket);
  },

  deleteTicket: (ticketId, functionToCallWhenMongoDeletedTickets) => {
    TicketModel.findByIdAndRemove(ticketId, functionToCallWhenMongoDeletedTickets);
  }

  //  createTicket: TicketModel.find((err, dbTickets)=>{
  //   assert(null, err);
  //
  //   console.log('tickets found = ', tickets);
  //   res.send(tickets);
  // });

};

export default TicketsApi;