import React, {
  Component
} from 'react';
import logo from './logo.svg';
//import SendMailInfo from './components/AdminView/SendMailClient2.js'

import {
  Navbar,
  Jumbotron,
  Button,
  button,
  DropdownButton,
  MenuItem,
  Popover,
  Accordion,
  Panel,
  PanelGroup,
  Modal,
  Overlay,
  OverlayTrigger,
  Tooltip,
  Form,
  FormGroup,
  Col,
  ControlLabel,
  FormControl
} from 'react-bootstrap';


import ApiClient from './components/ApiClient';

class AdminView extends Component {



  constructor(props) {
    super(props);

    this.state = {
      tickets: [],
      showModal: false
      //  resolvedTickets
    };

    //this.stateChecker = this.stateChecker.bind(this)
    this.handleSolve = this.handleSolve.bind(this);
    this.handleRefuse = this.handleRefuse.bind(this);
  }

  componentDidMount() {
    ApiClient.retrieveTikets('RusIu', (res) => {
      console.log(res.data);
      this.setState({
        tickets: res.data
      });
    });
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleFilter(index) {

  }

  handleSolve(ticket) {

    if (ticket.ticketState !== 'Solved') {
      ticket.ticketState = 'Solved';
    } else {
      ticket.ticketState = 'Pending';
    }
    this.setState({
      ticketState: 'Solved'
    })

  }

  handleRefuse(ticket) {

    if (ticket.ticketState !== 'Refused') {
      ticket.ticketState = 'Refused';
    } else {
      ticket.ticketState = 'Pending';
    }
    this.setState({
      ticketState: 'Refused'
    })

  }

  close() {
    this.setState({
      showModal: false
    });
    console.log('Popup Closed')
  }

  open(ticket) {
    this.setState({
      showModal: true
    });
    this.state.ticketTitle = ticket.ticketTitle
    this.state.ticketDescription = ticket.ticketDescription
    console.log('Popup Opened')
  }

  stateChecker(ticket) {
    //  alert(index);
    if (ticket.ticketState === 'Solved') {
      return "btn btn-success btn-sm";
    } else if (ticket.ticketState === 'Pending') {
      return "btn btn-warning btn-sm";
    } else if (ticket.ticketState === 'Refused') {
      return "btn btn-danger btn-sm";
    } else {
      return "btn btn-primary btn-sm";
    }
  }

  handleMailForward() {
    //extract popup ui data in objet and pass it to sendmailclient method
    //  SendMailInfo.sendMailInfo();
    console.log('Mail Request Sent')
    this.setState({
      showModal: false
    });
    console.log('Popup Closed')

  }

  computeRowBackground(index) {
    if (index % 2 === 0) {
      return 'evenRowBackground';
    }
    return 'oddRowBackground'
  }

  render() {
      return (

        <
        div className = "container" >
        <
        div >

        <
        /div> <
        h5 >
        Ticket Count:
        <
        span > {
          this.state.tickets.length
        } <
        /span> < /
        h5 > <
        div >
        <
        Modal show = {
          this.state.showModal
        }
        onHide = {
          this.close.bind(this)
        } >
        <
        Modal.Header closeButton >
        <
        Modal.Title > Send Mail < /Modal.Title> < /
        Modal.Header > <
        Modal.Body >


        <
        Form horizontal >
        <
        FormGroup controlId = "formHorizontalEmail" >
        <
        Col componentClass = {
          ControlLabel
        }
        sm = {
          2
        } >
        To:
        <
        /Col> <
        Col sm = {
          10
        } >
        <
        FormControl type = "email"
        defaultValue = "Aryan.Ahmadi-Khoie@haufe-lexware.com" / >
        <
        /Col> < /
        FormGroup > <
        /Form> <
        hr / >
        <
        Form horizontal >
        <
        FormGroup controlId = "formHorizontalEmail" >
        <
        Col componentClass = {
          ControlLabel
        }
        sm = {
          2
        } >
        Subject:
        <
        /Col> <
        Col sm = {
          10
        } >
        <
        FormControl type = "email"
        defaultValue = {
          this.state.ticketTitle
        }
        /> < /
        Col > <
        /FormGroup> < /
        Form > <
        hr / >
        <
        Form horizontal >
        <
        FormGroup controlId = "formHorizontalEmail" >
        <
        Col componentClass = {
          ControlLabel
        }
        sm = {
          0
        } >

        <
        /Col> <
        Col sm = {
          12
        } >
        <
        FormControl style = {
          {
            height: '300px'
          }
        }
        componentClass = "textarea"
        type = "email"
        defaultValue = {
          this.state.ticketDescription
        }
        /> < /
        Col > <
        /FormGroup> < /
        Form > <
        br / >
        <
        div className = "text-center"
        style = {
          {
            maxWidth: 250,
            margin: '0 auto 10px'
          }
        } >
        <
        Button bsStyle = "success"
        onClick = {
          this.handleMailForward.bind(this)
        }
        block >
        Send <
        /Button> < /
        div > <
        /Modal.Body> <
        Modal.Footer >
        <
        Button onClick = {
          this.close.bind(this)
        } > Close < /Button> < /
        Modal.Footer > <
        /Modal> < /
        div >

        <
        ul className = "list-group" > {
          this.state.tickets.map((ticket, index) =>
            <
            li className = {
              this.computeRowBackground(index)
            }
            key = {
              index
            } >
            <
            p > {
              this.stateChecker.bind(this, ticket)
            } {
              this.computeRowBackground.bind(this, index)
            } <
            /p> <
            h4 className = "list-group-item-heading" >
            <
            button className = {
              this.stateChecker(ticket)
            }
            onClick = {
              this.handleFilter.bind(this, index)
            } >
            <
            span > {
              ticket.ticketState
            } <
            /span> < /
            button > <
            span > {
              ' '
            } {
              ticket.ticketTitle
            } | Priority: {
              ' '
            } <
            /span> <
            button className = "btn btn-primary btn-sm"
            onClick = {
              this.handleFilter.bind(this, index)
            } >
            <
            span > {
              ticket.ticketPriority
            } <
            /span> < /
            button > {
              ' '
            } <
            DropdownButton title = "Menu "
            bsSize = "small"
            id = "" >
            <
            MenuItem onClick = {
              this.handleSolve.bind(this, ticket)
            } > Mark as Solved < /MenuItem> <
            MenuItem onClick = {
              this.handleRefuse.bind(this, ticket)
            } > Mark as Refused < /MenuItem> <
            MenuItem divider / >
            <
            MenuItem onClick = {
              this.open.bind(this, ticket)
            } > E - mail Forward < /MenuItem> < /
            DropdownButton > <
            /h4> <
            p >
            <
            span >
            <
            span className = "glyphicon glyphicon-tag" > {
              ' '
            }
            Category: {
              ' '
            } <
            /span> {
            ' '
          } <
          button className = "btn btn-default btn-xs"
          onClick = {
            this.handleFilter.bind(this, index)
          } >
          <
          span > {
            ticket.ticketCategory
          } <
          /span> < /
          button > <
          span > {
            ' '
          } | {
            ' '
          } <
          /span> <
          span className = "glyphicon glyphicon-user" > {
            ' '
          }
          Sender: {
            ' '
          } <
          /span> {
          ' '
        } <
        button className = "btn btn-default btn-xs"
        onClick = {
          this.handleFilter.bind(this, index)
        } >
        <
        span > {
          ticket.ticketSender
        } <
        /span> < /
        button > <
        span > {
          ' '
        } |
        Date: {
          ticket.ticketDate
        } {
          ' '
        } <
        /span> < /
        span > <
        /p> <
        h6 > { /* <Panel sbSize="xsmall" collapsible header="Show Description" eventKey="1"> */ } {
          ticket.ticketDescription
        } { /* </Panel> */ } <
        /h6> < /
        li >
      )
    } <
    /ul> {
  this.props.children
} <
/div>
);
}
}

export default AdminView;
