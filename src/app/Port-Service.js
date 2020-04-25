const SerialPort = require('serialport')
const ipc = require('electron').ipcRenderer;
// Port auswählen

// const port = new SerialPort('/dev/tty-usbserial1',)
//
// port.on('open', () => {
//   console.log('Port Opened')
// })

ipc.on('configData', (event, messages) => {
  // port.write(messages, err => {
  //   if (err) {
  //     return console.log('Error: ', err.message)
  //   }
  //   console.log('message written')
  // });
  console.log(messages);
});

ipc.on('activate', (event, messages) => {
  // port.write(messages, err => {
  //   if (err) {
  //     return console.log('Error: ', err.message)
  //   }
  //   console.log('message written')
  // });
  console.log(messages);
});
