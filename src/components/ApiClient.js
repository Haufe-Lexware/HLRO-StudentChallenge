import axios from 'axios';

const ApiClient = {
  retrieveTikets: (user, methodToCallToUpdateComponentWhenDataIsAvailable) => {
    axios.get('http://localhost:4000/api/tickets?user={user}')
      .then(methodToCallToUpdateComponentWhenDataIsAvailable)
      .catch(function(err) {
        console.log(err);
      });
  },

  createTicket: (ticket, methodToCallToPostTicket) =>{
    axios.post('http://localhost:4000/api/tickets', ticket, {headers : {'Content-Type':'application/json'}})
      .then(methodToCallToPostTicket)
      .catch(function(err) {
        console.log('POST error = ', err);
      })
  }
};

export default ApiClient;

//
// axios.post('api/tickets', {
//
//   })
//   .then(function(res) {
//     console.log(res);
//   })
//   .catch(function(err) {
//     console.log(err);
//   });
