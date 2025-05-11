module.exports.config = {
    name: "zihad",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    prefix: false,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
    dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  
var callback = () => api.sendMessage({body:`∂σ ɳσƭ ƭɾµรƭ ƭɦε ɓσƭ σρεɾαƭσɾ
--------------------------------------------

ƒαcεɓσσҡ :🔪 Winiix 🐰♨️


ɠεɳ∂εɾ :  Male👀

αɠε :  18+🤨


ɾεℓαƭเσɳรɦเρ : SINGLE-!🐰💚


ωσɾҡ : Facebook 


🐰https://www.facebook.com/profile.php?id=100036868721055



🪬🪅Whtsapp : 😈 03705409971 😈


♨️ɠɱαเℓ.   :tmkc.com

- Owner Winiix Don,😒

Name Ni Brand Ha Brand Winiix.!😾🤟

🥵🫦💋




🐰Winiix👀💦`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://graph.facebook.com/100067540204855/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   }; 
