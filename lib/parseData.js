var createStateRadio = require('./createStateRadio.js');
var shared = require('./shared.js');

module.exports = function(data){

	sails.log.info('Received data from Arduino ' + data);

	try{
		var json = JSON.parse(data);

		// if the JSON  is the temperature value
		if(json.sensor == shared.deviceType_temp[0].identifier) {
		}
		// if the JSON  is the humidity value
		if(json.sensor == shared.deviceType_temp[1].identifier) {
		}
		// if the JSON  is the light value
		if(json.sensor == shared.deviceType_light.identifier) {
		}
		// if the JSON  is the presence value
		if(json.sensor == shared.deviceType_presence.identifier) {
		}
		// if the JSON  is the gaz MQ2 value
		if(json.sensor == shared.deviceType_mq2.identifier) {
		}
		// if the JSON  is the gaz MQ5 value
		if(json.sensor == shared.deviceType_mq5.identifier) {
		}

	} catch(e){
		sails.log.warn('Gladys serial : cannot parse JSON received from arduino : ' + e);
	}
};
