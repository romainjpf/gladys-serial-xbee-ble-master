var ports = [];
var connect = require('./connect.js');
var Promise = require('bluebird');

module.exports = {

  temperature_sensor : {
    name: 'Temperature sensor',
    protocol: 'Zigbee',
    service: 'zigbee_serial'
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
    protocol: 'Zigbee',
    service: 'zigbee_serial'
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
    protocol: 'Zigbee',
    service: 'zigbee_serial'
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

  gas_sensor_MQ2 : {
    name: 'Gas sensor MQ2',
    protocol: 'Zigbee',
    service: 'zigbee_serial'
  },
  deviceType_mq2 : [
    {
      type: 'LPG rate',
      identifier: 'mq2 LPG',
      sensor: true,
      min: 0,
      max: 10000,
      unit: 'ppm',
      display: true
    },

    {
      type: 'CO rate',
      identifier: 'mq2 CO',
      sensor: true,
      min: 0,
      max: 10000,
      unit: 'ppm',
      display: true
    },

    {
      type: 'Smoke rate',
      identifier: 'mq2 SMOKE',
      sensor: true,
      min: 0,
      max: 10000,
      unit: 'ppm',
      display: true
    }
  ],

  gas_sensor_MQ5 : {
    name: 'Gas sensor MQ5',
    protocol: 'Zigbee',
    service: 'zigbee_serial'
  },
  deviceType_mq5 : [
    {
      type: 'CH4 rate',
      identifier: 'mq5 CH4',
      sensor: true,
      min: 0,
      max: 10000,
      unit: 'ppm',
      display: true
    },

    {
      type: 'LPG rate',
      identifier: 'mq5 LPG',
      sensor: true,
      min: 0,
      max: 10000,
      unit: 'ppm',
      display: true
    }
  ],

  gas_detection : {
    name: 'Warning gaz',
    protocol: 'Zigbee',
    service: 'zigbee_serial'
  },
  deviceType_gas_detection : [
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
