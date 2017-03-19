var iot = require('aws-iot-device-sdk');
var __dirname="certs";

var device = iot.device({
    keyPath: __dirname + '/TempSensorThing.private.key',
    certPath: __dirname + '/TempSensorThing.cert.pem',
    caPath: __dirname + '/root-CA.crt',
    clientID: 'Prueba',
    region: 'us-west-2'
});

/*
device
  .on('connect', function() {
    console.log('connect');
    device.subscribe('TempSensorThing');
    device.publish('TempSensorThing', JSON.stringify({sensorID: '004', temperatura: '70'}));
    console.log('connectsuccess');
  });

device
  .on('message', function(topic, payload) {
    console.log('message', topic, payload.toString());
  });
*/


device.on('connect', function() {
    console.log('connect');
    device.subscribe('testIN',function(error,result){
        console.log(result);
    })
});

device.on('close', function() {
    console.log('close');
});

device.on('reconnect', function() {
    console.log('reconnect');
});

device.on('offline', function() {
    console.log('offline');
});

device.on('message',function(topic,payload) {
    console.log('message',topic,payload.toString());
});

/*
var myVar = setInterval(myTimer, 5*1000);//cada 5 seg para prueba
//var myVar = setInterval(myTimer, 5*1000*60);//cada 5 min para prod

function myTimer() {
    var d = new Date();
    console.log('Enviando info '+d.toLocaleTimeString());
    var max=10000;var min=1;
    device.publish('MyTopic', JSON.stringify({sensorID: ''+Math.floor(Math.random() * (max - min + 1)) + min, temperatura: ''+Math.random() * (50 - 0) + 0}));
}
setInterval(callbackFunction(), interval);
*/

setInterval(function(){
    var d = new Date();
    var max=10000;var min=1;
    var temp=Math.random() * (50 - 0) + 0;
    //device.publish('MyTopic', JSON.stringify({sensorID: ''+Math.floor(Math.random() * (max - min + 1)) + min, temperatura: ''+temp}));
    device.publish('MyTopicEmail', JSON.stringify({sensorID: ''+Math.floor(Math.random() * (max - min + 1)) + min, temperatura: ''+temp}));
    console.log('Enviando info '+temp+' / '+d.toLocaleTimeString());
}, 5*1000);






