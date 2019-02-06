// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'ACbc81b70cab7b0c42a0c3bb3b0624bae6';
const authToken = '5e5c5250251b3d2bbbb98ad103ae21a5';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Test',
     from: '+',
     to: '+'
   })
  .then(message => console.log(message.sid))
  .done();
