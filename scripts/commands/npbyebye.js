const fs = require("fs");
module.exports = {
  config:{
	name: "bye",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "nayan", 
	description: "Fun",
	category: "no prefix",
	usages: "🙋‍♂️",
        cooldowns: 5, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
	if (body.indexOf("bye")==0 || body.indexOf("byy")==0 || body.indexOf("Bye")==0 || body.indexOf("by")==0) {
		var msg = {
				body: "ওকে bye বাবু ",
				attachment: fs.createReadStream(__dirname + `/cache/byebye.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😁", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
                  }
