# devfest-2019

Welcome to our project! This project aims to educate our audience about sustainabillity through a quiz. It aims to provide different alternatives that people can take in order to aid in making the world more "green" and a better place.


## to run
> $ git clone https://github.com/fernsanchez2334/devfest-2019.git
``` $ cd devfest-2019```
``` $ source bin/activate```
Now install all env setup things you need (specified below). Once that's done:
``` $ python app.py```
The app should be running on your 
```localhost:5000```

To send messages using twilio
``` $ node send_sms.js```

To respond to messages using twilio: 
Make sure you are running on the command line (in separate tabs) both 'node server.js' and your 'ngrok http 1337' command.
``` $ node server.js```
``` $ ngrok http 1337```

Grab the Forwarding address from the ngrok session (i.e. https://36ce5e99.ngrok.io) and set it up in your twilio console (i.e. https://36ce5e99.ngrok.io/sms)

## environment setup
To run this project locally, you will need a couple things:
- python3 ``` $ brew install python3 ```
- Flask ``` $ pip3 install flask ```
- Node.js (https://nodejs.org/en/)
- twilio ``` $ npm install twilio```
- Express.js ``` $ npm install express```
- Requests ``` $ pip install requests ```
