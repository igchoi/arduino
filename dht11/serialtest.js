const { SerialPort } = require('serialport')
const { ReadlineParser }  = require('@serialport/parser-readline')
const port = new SerialPort( { path:'/dev/cu.usbserial-AI03FMFB', baudRate: 9600 } )

const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))

port.on("open", () => {

   console.log('serial port open');});

   parser.on('data', data =>{ console.log('got word from arduino:', data);

});
