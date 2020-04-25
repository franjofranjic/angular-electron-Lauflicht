/* eslint-disable node/no-missing-require */

// Open event example
const SerialPort = require('serialport')
// Port auswählen
// !!!!!!!!!!
const port = new SerialPort('/dev/tty-usbserial1', baudRate:9600)

var data = "aaa;1;0;0;0;4000;eee;";
var init = "aaa;on;eee;";
var off = "aaa;off;eee;";

port.on('open', () => {
  console.log('Port Opened')
})

port.write(data, err => {
  if (err) {
    return console.log('Error: ', err.message)
  }
  console.log('message written')
})

