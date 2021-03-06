const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();

  twiml.message('Thank you for signing up! You will now start receiving daily notifications on how to be sustainable. Are you at DEVFEST2019? Start being more sustainable by reusing your coffee cup!  --Hungry Hippos');

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());

});

http.createServer(app).listen(1337, () => {
  console.log('Express server listening on port 1337');
});
