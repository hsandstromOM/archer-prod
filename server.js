const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors')
const bodyParser = require('body-parser');
const helmet = require('helmet');
const http = require('http');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(require('prerender-node'));


app.use(express.static(__dirname + '/dist'));

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!');
  res.end();
});

app.listen(process.env.PORT || 8080);

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'email.secureserver',
  auth: {
    user: 'info@archerconstructionsc.com.',
    pass: 'Archer123!'
  }
});

var mailOptions = {
  from: 'info@archerconstructionsc.com',
  to: 'info@archerconstructionsc.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});
