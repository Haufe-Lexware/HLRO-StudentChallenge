import React, { Component } from 'react';
import logo from './logo.svg';


var tickets = [
  {
    ticketTitle: 'Coffe Machine is broken',
    ticketDescription: 'I came this morning to work and it was broken.',
    ticketPriority: 'low',
    ticketCategory: 'Food & Drinks'
  },
  {
    ticketTitle: 'Need a new Headset',
    ticketDescription: 'I dropped it on the floor and it stopped working.',
    ticketPriority: 'medium',
    ticketCategory: 'Hardware'
  },
  {
    ticketTitle: 'Water is not working',
    ticketDescription: 'Water stopped working at around 9 AM.',
    ticketPriority: 'high',
    ticketCategory: 'Utilities'
  }
]

class UserView extends Component {

constructor (props) {
  super(props);

  this.state = {
    tickets
  };

  this.handleAddTicket = this.handleAddTicket.bind(this);
}

handleRemoveTicket(index) {
  this.setState({
    tickets: this.state.tickets.filter(function(e, i) {
      return i !== index;
    })
    })
}

handleAddTicket(ticket) {
  this.setState({tickets: [...this.state.tickets, ticket]})
}
computeRowBackground(index){
  if(index % 2 !== 0){
    return 'evenRowBackground';
  }
  return 'oddRowBackground'
}

  render() {
    return (
        <div className="container">
          <TicketInput onAddTicket={this.handleAddTicket}></TicketInput>
          <hr/>
          <h4>Ticket Count: <span className="badge">{this.state.tickets.length}</span></h4>

          <ul className="list-group">
          {this.state.tickets.map((ticket, index) =>
            <li className={this.computeRowBackground(index)} key={index}>
              <p>
                {this.computeRowBackground.bind(this, index)}
              </p>
              <h4 className="list-group-item-heading">{ticket.ticketTitle} <small><span className="label label-info">{ticket.ticketPriority}</span></small></h4>

              <p><span className="glyphicon glyphicon-tag"></span> {ticket.ticketCategory}</p>

              <p>{ticket.ticketDescription}</p>

              <button className="btn btn-danger btn-sm" onClick={this.handleRemoveTicket.bind(this, index)}><span className="glyphicon glyphicon-trash"></span> Delete</button>
            </li>
          )}

          </ul>


        </div>
    );
  }
}

class TicketInput extends Component {
  constructor(props){
    super(props);

    this.state = {
      ticketTitle: '',
      ticketDescription: '',
      ticketPriority: 'Lowest',
      ticketCategory: ''
      }

      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;

      this.setState({
        [name]: value
        })
    }

handleSubmit(event) {
  event.preventDefault();
  this.props.onAddTicket(this.state);
  this.setState({
    ticketTitle:'',
    ticketDescription:'',
    ticketPriority:'Lowest',
    ticketCateory:''
    });
  }

  render() {
      return (
        <div>
          <h4>Add New Ticket</h4>
          <form className="form-horizontal" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="inputTicketTitle" className="col-sm-2 control-label">Ticket</label>
              <div className="col-sm-10">
              <input name="ticketTitle"
                     type="text"
                     className="form-control"
                     id="inputTicketTitle"
                     value={this.state.ticketTitle}
                     onChange={this.handleInputChange}
                     placeholder="Title"></input>
              </div>
            </div>
              <div className="form-group">
                <label htmlFor="inputTicketDesc" className="col-sm-2 control-label">Description</label>
                <div className="col-sm-10">
                <textarea name="ticketDescription"
                       type="text"
                       className="form-control"
                       rows="3"
                       id="inputTicketDesc"
                       value={this.state.ticketDescription}
                       onChange={this.handleInputChange}
                       placeholder="Describe your problem"></textarea>
            </div>
          </div>
            <div className="form-group">
              <label htmlFor="inputTicketPriority" className="col-sm-2 control-label">Priority</label>
              <div className="col-sm-10">
              <select name="ticketPriority"
                      className="form-control"
                      id="inputTicketPriority"
                      value={this.state.ticketPriority}
                      onChange={this.handleInputChange}>
                   <option>Lowest</option>
                   <option>Low</option>
                   <option>Medium</option>
                   <option>High</option>
                   <option>Highest</option>
                 </select>
              </div>
           </div>
           <div className="form-group">
             <label htmlFor="inputTicketCategory" className="col-sm-2 control-label">Category</label>
             <div className="col-sm-10">
             <select name="ticketCategory"
                     className="form-control"
                     id="inputTicketCategory"
                     value={this.state.ticketCategory}
                     onChange={this.handleInputChange}>
                  <option>Food & Drinks</option>
                  <option>Hardware</option>
                  <option>Utilities</option>
                  <option>Other</option>
                </select>
            </div>
          </div>
          <div className="form-group">
           <div className="col-sm-offset-2 col-sm-10">
             <button type="submit" className="btn btn-success">Add Ticket</button>
           </div>
          </div>
       </form>
     </div>
   );
  }

  }

export default UserView;
