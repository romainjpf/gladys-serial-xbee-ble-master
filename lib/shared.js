var ports = [];
var connect = require('./connect.js');
var Promise = require('bluebird');

module.exports = {

  temperature_sensor : {
    name: 'Temperature sensor',
    protocol: 'Bluetooth Low Energy',
    service: 'ble_serial'
  },
  deviceType_temp : [
    {
      type: 'temperature',
      identifier: 'temperature',
      sensor: true,
      min: -40,
      max: 60,
      unit: '°C',
      display: true
    },
    {
      type: 'humidity',
      identifier: 'humidity',
      sensor: true,
      min: 0,
      max: 100,
      unit: '%',
      display: true
    }
  ],

  light_sensor : {
    name: 'Light sensor',
    protocol: 'Bluetooth Low Energy',
    service: 'ble_serial'
  },
  deviceType_light : [
    {
      type: 'light',
      identifier: 'light',
      sensor: true,
      min: 0,
      max: 40000,
      unit: 'lux',
      display: true
    }
  ],

  presence_sensor : {
    name: 'Presence sensor',
    protocol: 'Bluetooth Low Energy',
    service: 'ble_serial'
  },
  deviceType_presence : [
    {
      type: 'binary',
      identifier: 'presence',
      sensor: true,
      min: 0,
      max: 1,
      display: true
    }
  ],

  gaz_sensor_MQ2 : {
    name: 'Gaz sensor MQ2',
    protocol: 'Bluetooth Low Energy',
    service: 'ble_serial'
  },
  deviceType_mq2 : [
    {
      type: 'rate',
      identifier: 'gaz mq2',
      sensor: true,
      min: 0,
      max: 10000,
      unit: 'ppm',
      display: true
    }
  ],

  gaz_sensor_MQ5 : {
    name: 'Gaz sensor MQ5',
    protocol: 'Bluetooth Low Energy',
    service: 'ble_serial'
  },
  deviceType_mq5 : [
    {
      type: 'rate',
      identifier: 'gaz mq5',
      sensor: true,
      min: 0,
      max: 10000,
      unit: 'ppm',
      display: true
    }
  ],

  gaz_detection : {
    name: 'Warning gaz',
    protocol: 'Bluetooth Low Energy',
    service: 'ble_serial'
  },
  deviceType_gaz_detection : [
    {
      type: 'binary',
      identifier: 'warning gaz',
      sensor: true,
      min: 0,
      max: 1,
      display: true
    }
  ],

  addPort: function(newPort)  {
    ports.push(newPort);
  },

  getPorts: function() {
    return ports;
  },

  reset: function(){

      // we close all connections
      return Promise.map(ports, function(port){
          return closeConnection(port);
      })
      .then(function(){

          // then we reset ports variable
          ports = [];
      })
  }
};

function closeConnection(port){
  return new Promise(function(resolve, reject){
      port.close(function(){
          resolve();
      });
  });
}
