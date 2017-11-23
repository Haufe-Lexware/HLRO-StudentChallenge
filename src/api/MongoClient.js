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

const TicketsApi = {
  findAllTickets: function(functionToCallWhenMongoHasResultsForFindCall) {
    console.log('Start - findAllTickets');
    mongoose.model('Ticket', ticketSchema).find({}, functionToCallWhenMongoHasResultsForFindCall);
  },

  createTicket: (ticket, functionToCallWhenMongoHasResultsForFindCall) => {
    console.log('Implement ticket save in mongo client')
    let NewTicketTemplate = mongoose.model('Ticket', ticketSchema);
    let newTicket = new NewTicketTemplate(ticket);
    newTicket.save(functionToCallWhenMongoHasResultsForFindCall)
  },

  deleteTicket: (ticketId, functionToCallWhenMongoDeletedTicketsCall) => {
    let DeletedTicketTemplate = mongoose.model('TicketId', ticketSchema);
    DeletedTicketTemplate.findOneAndRemove({
      _id: ticketId
    }, functionToCallWhenMongoDeletedTicketsCall);
    //DeletedTicketTemplate.findByIdAndRemove(ticketId, functionToCallWhenMongoDeletedTicketsCall);
  }

  //  createTicket: TicketModel.find((err, dbTickets)=>{
  //   assert(null, err);
  //
  //   console.log('tickets found = ', tickets);
  //   res.send(tickets);
  // });

};

export default TicketsApi;
