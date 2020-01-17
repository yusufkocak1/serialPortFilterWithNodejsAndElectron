const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
var comPort = "COM"+document.getElementById("ports").value;
var boundRate = parseInt(document.getElementById("boundRate").value);
const port = new SerialPort(comPort, { baudRate: boundRate })

var log = "";
const parser = new Readline();
port.pipe(parser);

parser.on('data', line =>{
console.log(`> ${line}`);
console.log(document.getElementById("logs").textContent);
log+=line+"</br>";
document.getElementById("logs").innerHTML = log;
});

port.on('error', function(err) {
  document.getElementById("logs").innerHTML = err.message;
});


function stop() {
  var status = document.getElementById("listenBtn");
  console.log(status.textContent);
  if(status.textContent == "close"){
    status.textContent ="open";
    //burada portu değiştirmek gerek
  }else{
    status.textContent = "close";
    //burada portu kapatmak gerek
  }
}
