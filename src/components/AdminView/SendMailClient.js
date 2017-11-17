import http from 'http';
import qs from 'qs';
import mailData from 'mailData'



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

var postdata = qs.stringify(mailData);

//Initialise the variable that will store the response
var body='';


//Now we're going to set up the request and the callbacks to handle the data
var request = http.request(options, function(response) {
    //When we receive data, we want to store it in a string
    response.on('data', function (chunk) {
        body += chunk;
    });
    //On end of the request, run what we need to
    response.on('end',function() {
        //Do Something with the data
        console.log(body);
    });
});

//Now we need to set up the request itself.
//This is a simple sample error function
request.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});


//Write our post data to the request
request.write(postdata);
//End the request.
request.end();

let transporter = nodemailer.createTransport({
    host: 'localhost:5000',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
    }

});
