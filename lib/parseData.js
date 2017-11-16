var createStateRadio = require('./createStateRadio.js');
var shared = require('./shared.js');

module.exports = function(data){

	sails.log.info('Received data from Arduino ' + data);

	try{
		var json = JSON.parse(data);

		// if the JSON  is the temperature value
		if(json.sensor == shared.deviceType_temp[0].identifier) {
			sails.log.info('Received data from BLE : temperature ');
		}
		// if the JSON  is the humidity value
		if(json.sensor == shared.deviceType_temp[1].identifier) {
			sails.log.info('Received data from BLE : humidity ');
		}
		// if the JSON  is the light value
		if(json.sensor == shared.deviceType_light[0].identifier) {
			sails.log.info('Received data from BLE : light ');
		}
		// if the JSON  is the presence value
		if(json.sensor == shared.deviceType_presence[0].identifier) {
			sails.log.info('Received data from BLE : presence ');
		}
		// if the JSON  is the gaz MQ2 value
		if(json.sensor == shared.deviceType_mq2[0].identifier) {
			sails.log.info('Received data from BLE : MQ2 ');
		}
		// if the JSON  is the gaz MQ5 value
		if(json.sensor == shared.deviceType_mq5[0].identifier) {
			sails.log.info('Received data from BLE : MQ5 ');
		}

	} catch(e){
		sails.log.warn('Gladys serial : cannot parse JSON received from arduino : ' + e);
	}
};
