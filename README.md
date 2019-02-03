# devfest-2019

Welcome to our project! This project aims to educate our audience about sustainabillity through a quiz. It aims to provide different alternatives that people can take in order to aid in making the world more "green" and a better place.

## environment setup
To run this project locally, you will need a couple things:
- python3 ``` $ brew install python3 ```
- Flask ``` $ pip install flask ```
- Node.js
- twilio ``` $ npm install twilio```
- Express.js ``` $ npm install express```
- Requests ``` $ pip install requests ```

## to run
``` $ source bin/activate```
Install all env setup things you need
``` $ python app.py```
The app should be running on 
```localhost:5000```

To send messages using twilio
``` $ node send_sms.js```

To respond to messages using twilio:
Make sure you are running on the command line (in separate tabs) both 'node server.js' and your 'ngrok http 1337' command.
