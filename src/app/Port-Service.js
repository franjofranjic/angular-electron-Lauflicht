/* eslint-disable node/no-missing-require */

// Open event example
const SerialPort = require('serialport')
// Port auswählen
const port = new SerialPort('/dev/tty-usbserial1', baudRate:9600)

port.on('open', () => {
  console.log('Port Opened')
})

var data = "1;0;0;0;4000;";

port.write(data, err => {
  if (err) {
    return console.log('Error: ', err.message)
  }
  console.log('message written')
})

port.on('data', data => {
  /* get a buffer of data from the serial port */
  console.log(data.toString())
  // send data to component
})
