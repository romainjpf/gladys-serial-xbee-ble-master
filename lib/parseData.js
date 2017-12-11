var createStateRadio = require('./createStateRadio.js');
var shared = require('./shared.js');

module.exports = function(data){

	sails.log.info('Received data from Arduino ' + data);

	try{
		var json = JSON.parse(data);

		var state =
		{
    	value: json.value
		};

		// if the JSON  is the temperature value
		if(json.sensor == shared.deviceType_temp[0].identifier) {
			sails.log.info('Received data from Zigbee : temperature ');
			gladys.deviceState.createByDeviceTypeIdentifier(
					shared.deviceType_temp[0].identifier,
					shared.temperature_sensor.service,
					state);
		}
		// if the JSON  is the humidity value
		if(json.sensor == shared.deviceType_temp[1].identifier) {
			sails.log.info('Received data from Zigbee : humidity ');
			gladys.deviceState.createByDeviceTypeIdentifier(
					shared.deviceType_temp[1].identifier,
					shared.temperature_sensor.service,
					state);
		}
		// if the JSON  is the light value
		if(json.sensor == shared.deviceType_light[0].identifier) {
			sails.log.info('Received data from Zigbee : light ');
			gladys.deviceState.createByDeviceTypeIdentifier(
					shared.deviceType_light[0].identifier,
					shared.light_sensor.service,
					state);
		}
		// if the JSON  is the presence value
		if(json.sensor == shared.deviceType_presence[0].identifier) {
			sails.log.info('Received data from Zigbee : presence ');
			gladys.deviceState.createByDeviceTypeIdentifier(
					shared.deviceType_presence[0].identifier,
					shared.presence_sensor.service,
					state);
		}
		// if the JSON  is the gaz MQ2 value
		if(json.sensor == shared.deviceType_mq2[0].identifier) {
			sails.log.info('Received data from Zigbee : MQ2 ');
			gladys.deviceState.createByDeviceTypeIdentifier(
					shared.deviceType_mq2[0].identifier,
					shared.gaz_sensor_MQ2.service,
					state);
		}
		// if the JSON  is the gaz MQ5 value
		if(json.sensor == shared.deviceType_mq5[0].identifier) {
			sails.log.info('Received data from Zigbee : MQ5 ');
			gladys.deviceState.createByDeviceTypeIdentifier(
					shared.deviceType_mq5[0].identifier,
					shared.gaz_sensor_MQ5.service,
					state);
		}

		// if the JSON  is the gas warning
		if(json.sensor == shared.deviceType_gaz_detection[0].identifier) {
			sails.log.info('Received data from Zigbee : Warning gas');
			gladys.deviceState.createByDeviceTypeIdentifier(
					shared.deviceType_gaz_detection[0].identifier,
					shared.gaz_detection.service,
					state);
		}

	} catch(e){
		sails.log.warn('Gladys serial : cannot parse JSON received from arduino : ' + e);
	}
};
