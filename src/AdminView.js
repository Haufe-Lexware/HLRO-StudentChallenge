import React, { Component } from 'react';
import logo from './logo.svg';

import { Navbar, Jumbotron, Button, button, DropdownButton, MenuItem, Popover, Accordion, Panel, PanelGroup, Modal, Overlay, OverlayTrigger, Tooltip, Form, FormGroup, Col, ControlLabel, FormControl} from 'react-bootstrap';
import Popup from './components/Popup';

var tickets = [
  {
    ticketTitle: 'Coffe Machine is broken',
    ticketDescription: 'I came this morning to work and it was broken.',
    ticketPriority: 'Medium',
    ticketCategory: 'Food & Drinks',
    ticketDate: '20.10.2017, 8:10',
    ticketSender: 'Mihai Golcea',
    ticketState: 'Pending'
  },
  {
    ticketTitle: 'Need a new Headset',
    ticketDescription: 'I dropped it on the floor and it stoppd working.',
    ticketPriority: 'Low',
    ticketCategory: 'Hardware',
    ticketDate: '19.10.2017, 14:12',
    ticketSender: 'Mihai Golcea',
    ticketState: 'Refused'
  },
  {
    ticketTitle: 'Water is not working',
    ticketDescription: 'Water stopped working at around 9 AM.',
    ticketPriority: 'High',
    ticketCategory: 'Utilities',
    ticketDate: '16.10.2017, 09:25',
    ticketSender: 'Ionut Popescu',
    ticketState: 'Solved'
  }
]

var resolvedTickets = [

  {
    ticketTitle: 'Need a new Headset',
    ticketDescription: 'I dropped it on the floor and it stoppd working.',
    ticketPriority: 'Low',
    ticketCategory: 'Hardware',
    ticketDate: '19.10.2017, 14:12',
    ticketSender: 'Mihai Golcea',
    ticketState: 'Refused'
  },
  {
    ticketTitle: 'Water is not working',
    ticketDescription: 'Water stopped working at around 9 AM.',
    ticketPriority: 'High',
    ticketCategory: 'Utilities',
    ticketDate: '16.10.2017, 09:25',
    ticketSender: 'Ionut Popescu',
    ticketState: 'Solved'
  }
]

class AdminView extends Component {



  constructor(props){
    super(props);

    this.state = {
      tickets
    //  resolvedTickets
    };

    //this.stateChecker = this.stateChecker.bind(this)
    this.handleSolve = this.handleSolve.bind(this);
    this.handleRefuse = this.handleRefuse.bind(this);
  }

  handleFilter(index){

  }

  handleSolve(ticket){

    if(ticket.ticketState !== 'Solved'){
      ticket.ticketState = 'Solved';
    }else{
      ticket.ticketState = 'Pending';
    }
      this.setState({ticketState: 'Solved'})

  }

  handleRefuse(ticket){

    if(ticket.ticketState !== 'Refused'){
      ticket.ticketState = 'Refused';
    }else{
      ticket.ticketState = 'Pending';
    }
      this.setState({ticketState: 'Refused'})

  }


  stateChecker(ticket){
  //  alert(index);
    if(ticket.ticketState === 'Solved'){
      return "btn btn-success btn-sm";
    }else if(ticket.ticketState === 'Pending'){
      return "btn btn-warning btn-sm";
    }else if(ticket.ticketState === 'Refused'){
      return "btn btn-danger btn-sm";
    }else{
      return "btn btn-primary btn-sm";
    }
  }

  handleMailForward(){

  }
computeRowBackground(index){
  if(index % 2 === 0){
    return 'evenRowBackground';
  }
  return 'oddRowBackground'
}

  render() {
    return (

      <div className="container">
        <div>

        </div>
        <h5>
          Ticket Count:
          <span>
            {this.state.tickets.length}
          </span>
        </h5>
        <div>

        </div>

        <ul className="list-group">
          {this.state.tickets.map((ticket, index) =>
            <li className= {this.computeRowBackground(index)} key={index} >
            <Popup ref="popup"/>
            <p>
              {this.stateChecker.bind(this, ticket)}
              {this.computeRowBackground.bind(this, index)}
            </p>
              <h4 className="list-group-item-heading">
                <button className = {this.stateChecker(ticket)} onClick = {this.handleFilter.bind(this, index)}>
                  <span>
                    {ticket.ticketState}
                  </span>
                </button>
                <span>
                  {' '}
                  {ticket.ticketTitle} | Priority:
                  {' '}
                </span>
                <button className="btn btn-primary btn-sm" onClick={this.handleFilter.bind(this, index)}>
                  <span>
                    {ticket.ticketPriority}
                  </span>
                </button>
                {' '}
              <DropdownButton title="Menu " bsSize="small" id="">
                <MenuItem onClick = {this.handleSolve.bind(this,ticket)}>Mark as Solved</MenuItem>
                <MenuItem onClick= {this.handleRefuse.bind(this,ticket)}>Mark as Refused</MenuItem>
                <MenuItem divider />

                <MenuItem onClick = {() => this.refs.popup.open.bind(this, ticket)}> E-mail Forward </MenuItem>
              </DropdownButton>
              </h4>
              <p>
                <span>
                  <span className = "glyphicon glyphicon-tag">
                    {' '}
                    Category:
                    {' '}
                  </span>
                  {' '}
                <button className="btn btn-default btn-xs" onClick = {this.handleFilter.bind(this, index)} >
                  <span>
                    {ticket.ticketCategory}
                  </span>
                </button>
                <span>
                {' '}  | {' '}
                </span>
                <span className="glyphicon glyphicon-user">
                  {' '}
                  Sender:
                  {' '}
                </span>
                {' '}
                <button className="btn btn-default btn-xs" onClick = {this.handleFilter.bind(this, index)}>
                  <span>
                    {ticket.ticketSender}
                  </span>
                </button>
                  <span>
                    {' '}
                    | Date: {ticket.ticketDate}
                    {' '}
                  </span>
                </span>
              </p>
              <h6>
                {/* <Panel sbSize="xsmall" collapsible header="Show Description" eventKey="1"> */}
                  {ticket.ticketDescription}
                {/* </Panel> */}
              </h6>
            </li>
          )}
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default AdminView;
