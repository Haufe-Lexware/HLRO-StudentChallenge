import mailData from '../Popup.js'
import react, {Component} from 'react'
import request from 'request'
import querystring from 'querystring';

class SendMailInfo extends Component {

  static sendMailInfo(){

    console.log('Mail Request (3) Started')
    console.log('Mail Data:')
    console.log(mailData)

    var postdata = querystring.stringify(mailData);

    request.post(
    'localhost:5000/mail/send',
    { json: postdata },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    }
);

console.log('POST data sent')

  }

}

export default SendMailInfo;
