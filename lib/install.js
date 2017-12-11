var Promise = require('bluebird');
var shared = require('./shared.js');

module.exports = function() {
  // Create the temperature sensor device
  gladys.device.create({device: shared.temperature_sensor, types: shared.deviceType_temp});

  // Create the light sensor device
  gladys.device.create({device: shared.light_sensor, types: shared.deviceType_light});

  // Create the presence sensor device
  gladys.device.create({device: shared.presence_sensor, types: shared.deviceType_presence});

  // Create the gaz sensor MQ2 device
  gladys.device.create({device: shared.gas_sensor_MQ2, types: shared.deviceType_mq2});

  // Create the gaz sensor MQ5 device
  gladys.device.create({device: shared.gas_sensor_MQ5, types: shared.deviceType_mq5});

  // Create the gaz detection device
  gladys.device.create({device: shared.gas_detection, types: shared.deviceType_gas_detection});

  sails.log.info('Serial Zigbee : Module installed');

  return Promise.resolve();
}
