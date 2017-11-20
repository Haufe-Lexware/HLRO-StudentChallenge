import http from 'http';
import querystring from 'querystring';
import mailData from '../Popup.js'
import react, {Component} from 'react'


class SendMailInfo extends Component {

  static sendMailInfo(){

    console.log('Mail Request (1) Started')
    console.log('Mail Data:')
    console.log(mailData)

    //These are the post options
    var options = {
      hostname: 'localhost',
      port: 5000,
      path: '/mail/send',
      method: 'POST'
    };
    //The postdata can be anything, but I'm using querystring
    //to convert it into the format
    //username=User&password=Password to be easily parsed in php

    //expose method to be called with param to send post request
    var postdata = querystring.stringify(mailData);

    console.log(postdata);

    //Initialise the variable that will store the response
    var body='';

    //Now we're going to set up the request and the callbacks to handle the data
    var request = http.request(options, function(response) {
        //When we receive data, we want to store it in a string
        console.log('request Function Started')

        //response.setEncoding('utf8');
        response.on('data', function (chunk) {
          console.log('Response: ' + chunk);
          //console.log(body);
            body += chunk;
          //console.log(body);
        });
        //On end of the request, run what we need to
        response.on('end',function() {
            //Do Something with the data
            console.log('Hello')
            console.log(body);
        });
    });

    //Now we need to set up the request itself.
    //This is a simple sample error function
    request.on('error', function(e) {
      console.log('problem with request: ' + e.message);
    });


    //Write our post data to the request
    console.log('writing post data')
    request.write(postdata);
    //console.log(request.write(postdata))
    console.log('post data written')
    //End the request.
    request.end();
    console.log('Request Ended')

console.log('POST data sent')

  }

}

export default SendMailInfo;
