import http from 'http';
import querystring from 'querystring';
import mailData from '../Popup.js'
import react, {Component} from 'react'
import ajax from 'ajax'


class SendMailInfo extends Component {

  static sendMailInfo(){


    var postdata = querystring.stringify(mailData);
    console.log('Mail Request (2) Started')
    console.log('Mail Data:')
    console.log(mailData)
    ajax({
        type: 'POST',
        url: 'localhost:5000/mail/send',
        data: postdata
      })

console.log('POST data sent')

  }



}

export default SendMailInfo;
