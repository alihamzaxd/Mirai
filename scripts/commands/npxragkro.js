const fs = require("fs");
module.exports.config = {
  name: "😡",
  version: "1.0.1",
  permssion: 0,
  prefix: true,
  credits: "Nayan", 
  description: "hihihihi",
  category: "no prefix",
  usages: "🖕",
    cooldowns: 5, 
};

module.exports.handleEvent = async function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  const axios = require('axios')
  const vid = (
    await axios.get(
      'https://drive.google.com/uc?id=1D9petxYMYUDl5lF9KU8z_HR6HVLKVOkB',
      { responseType: 'stream' }
    )
  ).data;
  if (event.body.indexOf("😡")==0 || event.body.indexOf("🤬")==0 || event.body.indexOf("😈")==0 || event.body.indexOf("👿")==0) {
    var msg = {
        body: "~ রাগ করো কোনো গো..!!😭🥀",
        attachment: vid
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥹", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
