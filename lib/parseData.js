var createStateRadio = require('./createStateRadio.js');
var shared = require('./shared.js');

module.exports = function(data){

	sails.log.info('Received data from Arduino ' + data);

	try{
		var json = JSON.parse(data);

		// if the JSON  is the temperature value
		if(json.sensor == shared.deviceType_temp[0].identifier) {
			sails.log.info('Received data from BLE : temperature ');
			deviceState.createByDeviceTypeIdentifier(
					shared.deviceType_temp[0].identifier,
					shared.temperature_sensor.service,
					{state: json.value});
		}
		// if the JSON  is the humidity value
		if(json.sensor == shared.deviceType_temp[1].identifier) {
			sails.log.info('Received data from BLE : humidity ');
			deviceState.createByDeviceTypeIdentifier(
					shared.deviceType_temp[1].identifier,
					shared.temperature_sensor.service,
					{state: json.value});
		}
		// if the JSON  is the light value
		if(json.sensor == shared.deviceType_light[0].identifier) {
			sails.log.info('Received data from BLE : light ');
			deviceState.createByDeviceTypeIdentifier(
					shared.deviceType_light[0].identifier,
					shared.light_sensor.service,
					{state: json.value});
		}
		// if the JSON  is the presence value
		if(json.sensor == shared.deviceType_presence[0].identifier) {
			sails.log.info('Received data from BLE : presence ');
			deviceState.createByDeviceTypeIdentifier(
					shared.deviceType_presence[0].identifier,
					shared.presence_sensor.service,
					{state: json.value});
		}
		// if the JSON  is the gaz MQ2 value
		if(json.sensor == shared.deviceType_mq2[0].identifier) {
			sails.log.info('Received data from BLE : MQ2 ');
			deviceState.createByDeviceTypeIdentifier(
					shared.deviceType_mq2[0].identifier,
					shared.gaz_sensor_MQ2.service,
					{state: json.value});
		}
		// if the JSON  is the gaz MQ5 value
		if(json.sensor == shared.deviceType_mq5[0].identifier) {
			sails.log.info('Received data from BLE : MQ5 ');
			deviceState.createByDeviceTypeIdentifier(
					shared.deviceType_mq5[0].identifier,
					shared.gaz_sensor_MQ5.service,
					{state: json.value});
		}

	} catch(e){
		sails.log.warn('Gladys serial : cannot parse JSON received from arduino : ' + e);
	}
};
