import express from 'express';
import nodemailer from 'nodemailer';
import assert from 'assert';
import bodyParser from 'body-parser';

//The Mail Info Reciever

const router = express.Router();

//let subject = "";
//let reciever = "";
//let sender = "";
//let content = "";

router.post('/send', (req, res) =>{
  console.log('In /mail');
  //console.log(req);
  const mailData = req.body;
  console.log(mailData);
  const subject = mailData.subject;
  const reciever = mailData.reciever;
  const sender = mailData.sender;
  const content = mailData.content;


  //return true;
});


const server = express();
server.use(express.static('public'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use('/mail', router);

server.listen(5000, '0.0.0.0', () => {
  console.info('Mail server running', 5000);
});

//export default router;


// The Mail Sending Part
let transporter = nodemailer.createTransport({
    host: '10.102.1.100',
    port: 25,
    secure: false, // true for 465, false for other ports
    auth: {
      //user: 'user@mailserver.com',
    //  pass: 'passwd'
    },
    tls: {rejectUnauthorized: false},
    debug:true
});

let mailOptions = {
    from: ' " Fred Foo 👻 " < Aryan.Ahmadi-Khoie@haufe-lexware.com > ', // sender address
    to: 'Iulia.Rus@haufe-lexware.com, Iulia.Rus@haufe-lexware.com', // list of receivers
    subject: subject, // Subject line
    text: content, // plain text body
  //  html: content  html body
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
});
