// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = '=';
const authToken = '';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Test',
     from: '+',
     to: '+'
   })
  .then(message => console.log(message.sid))
  .done();
