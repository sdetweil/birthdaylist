/* Magic Mirror
 * Module: Birthdaylist
 *
 * Node_helper written by perlchamp@gmx.net
 */
var NodeHelper = require("node_helper");
var moment = require("moment");
// add require of other javascripot components here
const csv = require("csvtojson");
// add required variables here (out of create-section)
var birthdaysArray = [];

module.exports = NodeHelper.create({

	init() {console.log("init module helper birthdaylist"); },

	start() { },

	stop() {console.log("Stopping module helper: ",this.name); },

	// handle messages from our module
	// each notification indicates a different messages
	// payload is a data structure that is different per message
	// ... up to you to design this
	socketNotificationReceived(notification, payload) {
		var self = this;
		console.log("Starting module helper: ",this.name);

		// convert the csv-file into a JSON-String
		const csvFilePath = this.path + '/data/bdl.csv';
		csv()
		.fromFile(csvFilePath)
		.then(function(jsonObj) {
			//console.log("list="+JSON.stringify(jsonObj));

			// send data to [modulname].js
			self.sendSocketNotification("JSONDATA", jsonObj);
		})

		// if config message from module
		if (notification === "CONFIG") {
			// save payload config info
			this.config = payload;
			// wait 15 seconds, send a message back to module
			setTimeout(()=> {this.sendSocketNotification("message_from_helper"," this is a test_message")}, 15000);
		}
		else if(notification === "????2") { }
	},
});
