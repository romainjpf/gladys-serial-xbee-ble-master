var Promise = require('bluebird');

module.exports = function() {
  //Delete the BLE devices
  gladys.device.getByService({ service: 'ble_serial' })
  .then(function(devices){
    // foreach device
    return Promise.map(devices, function(device) {
      gladys.device.delete(device);
    });
  });

  //Delete the arduino serial devices
  gladys.device.getByService({ service: 'serial' })
  .then(function(devices){
    // foreach device
    return Promise.map(devices, function(device) {
      gladys.device.delete(device);
    });
  });

  sails.log.info('Serial Xbee Ble : Module uninstalled');
  return Promise.resolve();

}
