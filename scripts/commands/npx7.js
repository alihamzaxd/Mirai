module.exports.config = {
  name: "🎉",
  version: "1.0.0",
  permission: 0,
  credits: "MR-IMRAN",
  description: "",
  prefix: true, 
  category: "no prefix", 
  usages: "🥰",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
};

module.exports.handleEvent = async ({ api, event, Threads }) => {
  if (event.body.indexOf("🎉") == 0) {
    const axios = global.nodemodule["axios"];
    const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
    var link = ["https://drive.google.com/uc?id=1ju0kg-pD-42jJJQtCfFNtGt1YDNa9Hpl"];
    var callback = () => api.sendMessage({
      body: `🐰🌼-𝐓𝐡𝐢𝐬 𝐀𝐛𝐨𝐮𝐭 𝐋𝐢𝐧𝐞..!-🌸🖇️🍒 \n ♥︎╣[-🙂-]╠♥︎ 🌦️🐰🍭🍒 𝙞 𝙬𝙖𝙣𝙩 𝙮𝙤𝙪 𝙛𝙤𝙧 𝙖 𝙬𝙝𝙞𝙡𝙚 𝙉𝙤𝙩 𝙛𝙤𝙧 𝙡𝙞𝙛𝙚—🐰✨-!<🌸🍓🌈- \n __ আমি তোমাকে চাই ক্ষনিকের জন্য নয় সারা জীবনের জন্য.🙂🌺🌼🌺 \n\n  ✍️⎯͢⎯⃝🩵 রাৃঁনা্ৃঁ ⎯͢⎯⃝🩷`,
      attachment: fs.createReadStream(__dirname + "/cache/2024.mp4")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2024.mp4"), event.messageID);
    const timeStart = Date.now();
    const PREFIX = config.PREFIX;
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/2024.mp4")).on("close", () => callback());
  }
};

module.exports.languages = {
  "vi": {
    "on": "Dùng sai cách rồi lêu lêu",
    "off": "sv ngu, đã bão dùng sai cách",
    "successText": `🧠`,
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "success!",
  }
};

module.exports.run = async ({ api, event, Threads, getText }) => {
  let { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;
  if (typeof data["🫠"] == "undefined" || data["🤗"] == true) data["🤗"] = false;
  else data["🤗"] = true;
  await Threads.setData(threadID, {
    data
  });
  global.data.threadData.set(threadID, data);
  api.sendMessage(`${(data["🔥"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
};
