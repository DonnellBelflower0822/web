//@ts-ignore
const ws = require('ws');

//@ts-ignore
let wss: ws.WebSocketServer;

module.exports = () => {
  console.log(wss)
  if (wss) {
    return;
  }

  wss = new ws.WebSocketServer({ port: 9999 });
  //@ts-ignore
  wss.on('connection', function connection(ws) {
    //@ts-ignore
    ws.on('message', function incoming(message) {
      console.log('received: %s', message);
    });

    ws.send('something');
  });
};


