var Promise = require('bluebird');
var shared = require('./shared.js');

module.exports = function() {
  // Create the temperature sensor device
  gladys.device.create({device: shared.temperature_sensor, types: shared.deviceType_temp})
  .then(function() {
    // Create the light sensor device
    return gladys.device.create({device: shared.light_sensor, types: shared.deviceType_light});
  })
  .then(function() {
    // Create the presence sensor device
    return gladys.device.create({device: shared.presence_sensor, types: shared.deviceType_presence});
  })
  .then(function() {
    // Create the gaz sensor MQ2 device
    return gladys.device.create({device: shared.gaz_sensor_MQ2, types: shared.deviceType_mq2});
  })
  .then(function() {
    // Create the gaz sensor MQ5 device
    return gladys.device.create({device: shared.gaz_sensor_MQ5, types: shared.deviceType_mq5});
  })
  .then(function() {
    sails.log.info('Serial Xbee Ble : Sensors created');
    return Promise.resolve();
  })
  .catch(function(err) {
    sails.log.warn('Serial Xbee Ble : Failed to create sensors');
    sails.log.warn(err);
  });

}
