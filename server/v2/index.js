const app = require('express')();
const ReceiveData = require('./services/ReceiveData')

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

const server = app.listen(3000);
const io = require('./socket').init(server);
const port = require('./serialPort').init('/dev/ttyACM0', 9600);

//----------------------- SOCKET LISTENERS --------------------------

let clients = 0;
io.on('connection', socket => {
  //Tell us if a client connected
  clients++;
  console.log(`CONNECT: ${clients} client(s) connected!`);

  //Here are the messages received from the web
  socket.on("myClientMessage", (data) => {
    ReceiveData.sendBack(data); //send back to the web
    port.write(data); //send to the arduino
  })

  //Tell us if a client disconnected
  socket.on("disconnect", () => {
    clients--;
    console.log(`DISCONNECT: ${clients} client(s) connected!`);
  });
});

