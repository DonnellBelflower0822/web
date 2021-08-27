const { ipcMain } = require('electron');
const initWs = require('./ws');

ipcMain.on('asynchronous-message', (event, arg) => {
  console.log(arg); // prints "ping"

  initWs();

  event.reply('asynchronous-reply', 'pong');
});

ipcMain.on('synchronous-message', (event, arg) => {
  console.log(arg); // prints "ping"
  event.returnValue = 'pong';
});