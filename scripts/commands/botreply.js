module.exports.config = {
  name: "bot2",
  version: "0.0.2", 
  permission: 0,
  prefix: false,
  credits: "Nayan",
  description: "talk with bot",
  category: "user",
  usages: "",
    cooldowns: 5,
}; 
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["I Love You" , "শুনবো না😼 তুমি আমাকে প্রেম করাই দাও নি🥺 পচা তুমি🥺 " , ", জান তুমি শুধু আমার আমি তোমারে ৩৬৫ দিন ভালোবাসি-💝🌺😽" , "এত কাছেও এসো না,প্রেম এ পরে যাবো তো 🙈" , "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋 " , "-আমার গল্পে তোমার নানি সেরা-🙊🙆‍♂️🤗", "হা বলো😒,কি করতে পারি😐😑?" , "-বালিকা━👸-𝐃𝐨 𝐲𝐨𝐮-🫵-বিয়া-𝐦𝐞-😽-আমি তোমাকে-😻-আম্মু হইতে সাহায্য করব-🙈🥱","মে হলে জিহাদ বসের সাথে প্রেম করো🙈??. " ,  "আরে Bolo আমার জান ,কেমন আসো?😚 " , "Bot বলে অসম্মান করচ্ছিছ,😰😿" , "Hop bedi😾,Boss বল boss😼" , "চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু" , "Bot না , জানু বল জানু 😘 " , "বার বার Disturb করেছিস কোনো😾,আমার রাকিব জানু এর সাথে ব্যাস্ত আসি😋" , "আই লাভ ইউ" , "আমাকে ডাকলে ,আমি কিন্তূ কিস করে দেবো😘 " , "এই'নেও🔑চাবী 😒𝘪𝘯𝘣𝘰𝘹-এর 🔐তালা খুলে মেছেজ দেও📥🫠🤗 I am single🙂" , "হা জানু , এইদিক এ আসো কিস দেই🤭 😘" , "আজকে প্রপোজ করে দেখো রাজি হইয়া যামু-😌🤗😇" , "তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂 " , "আমাকে ডেকো না,আমি ব্যাস্ত আসি" , "কি হলো ,মিস টিস করচ্ছিস নাকি🤣" , "বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏" , ", -ইস কেউ যদি বলতো-🙂-আমার শুধু  তোমাকেই লাগবে-💜🌸" , "হা বলো, শুনছি আমি 😏" , "আর কত বার ডাকবি ,শুনছি তো" , "BOSS জিহাদ কে Ummmmha দে 😒" , "বলো কি করতে পারি তোমার জন্য" , "আমি তো অন্ধ কিছু দেখি না🐸 😎" , "Bot না জানু,বল 😌" , "বলো জানু 🌚" , "তোর কি চোখে পড়ে না আমি ZIHAD BOSS এর সাথে ব্যাস্ত আসি😒"  , "𝙏𝙢𝙧 𝙣𝙖𝙣𝙞 𝙧 ওই টা  😑🥺" , "amr Jan lagbe,Tumi ki single aso?", "-তাবিজ কইরা হইলেও ফ্রেম এক্কান করমুই তাতে যা হই হোক-🤧🥱🌻"]; 
  var rand = tl[Math.floor(Math.random() * tl.length)]


   if ((event.body.toLowerCase() == "মায়া") || (event.body.toLowerCase() == "আবেগ")) {
     return api.sendMessage("আমি ক্লান্ত!😮‍💨মিথ্যে হাসিতে,মিথ্যে মানুষে,মিথ্যে বন্ধুতে, মিথ্যে ভালোবাসায় 💔", threadID);
   };  
  
  if ((event.body.toLowerCase() == "জান") || (event.body.toLowerCase() == "সোনা")) {
     return api.sendMessage("আমি রোবট তাই প্রেম করতে পারবো না😥", threadID);
   };

   if ((event.body.toLowerCase() == "ki koro") || (event.body.toLowerCase() == "কি করো")) {
     return api.sendMessage("বসে বসে তোমার কথাই ভাবতেছি কিভাবে তোমাকে পটানো যায় 🥹", threadID);
   };

   if ((event.body.toLowerCase() == "খাইছো") || (event.body.toLowerCase() == "khayso")) {
     return api.sendMessage("না খাই নাই তোমার জন্য বসে আছি আমরা এক সাথে খাবো 😗", threadID);
   };

   if ((event.body.toLowerCase() == "ahhh") || (event.body.toLowerCase() == "uff")) {
     return api.sendMessage("ahhhhhhhhhhhh uffff jan ❤️😗", threadID);
   };

   if ((event.body.toLowerCase() == "kothay tmi") || (event.body.toLowerCase() == "koi")) {
     return api.sendMessage("Koi Kam Dhanda ke le Fb se Ghr ni chlta 😓🥹", threadID);
   };

   if ((event.body.toLowerCase() == "pagal") || (event.body.toLowerCase() == "pgl")) {
     return api.sendMessage("Tu Khud Hoga Pagal🙁🥹", threadID);
   };


   if ((event.body.toLowerCase() == "hridoy") || (event.body.toLowerCase() == "রিদয়")) {
     return api.sendMessage("️Ondrila. Ohona.sadi.diya.faria.omi.mayra.cadhni.puspo ভাতার 😏", threadID);
   };

   if ((event.body.toLowerCase() == "magi") || (event.body.toLowerCase() == "x")) {
     return api.sendMessage("️আমার ex এর ওইটা অনেক বড়\n\n\nমানে মন 😏", threadID);
   };

   if ((event.body.toLowerCase() == "friend") || (event.body.toLowerCase() == "Dost")) {
     return api.sendMessage("️Sary dost Dost ni Lun** Hoty Ha🙈🐸", threadID);
   };

   if ((event.body.toLowerCase() == "Choor") || (event.body.toLowerCase() == "chor")) {
     return api.sendMessage("Kon Chor Agya Gc men Nikalo Is chor ko mera dil na chura le kahi", threadID);
   };

   if ((event.body.toLowerCase() == "shrm") || (event.body.toLowerCase() == "sharam kar")) {
     return api.sendMessage("️Ye Lo Sharama Dia Ab Khush🙈", threadID);
   };

   if ((event.body.toLowerCase() == "phone") || (event.body.toLowerCase() == "mobile")) {
     return api.sendMessage("️Mera Mobile Men Gandi Videos Pdii Bht🥵🥵", threadID);
   };

   if ((event.body.toLowerCase() == "তোমার নামে কি") || (event.body.toLowerCase() == "name")) {
     return api.sendMessage("️আমার নাম  : আবু মাওলানা হাজি মুহাম্মদ খালেদ বিন ওয়ালেদ আব্দুল্লাহ আল ঈবনে রাফসান রহমান রাব্বি ইসলাম সুমন আহমেদ কবিরুজ্জামান মেরাজ মন্ডল মাহমুদউল্লাহ আলামিন।🌚💩", threadID);
   };

   if ((event.body.toLowerCase() == "kire") || (event.body.toLowerCase() == "কিরে")) {
     return api.sendMessage("️সাবধানে থাকিস", threadID);
   };

   if ((event.body.toLowerCase() == "tmi chele naki meye") || (event.body.toLowerCase() == "chele na meye")) {
     return api.sendMessage("️আমি সকিনার আম্মু 🙂🙊", threadID);
   };

   if ((event.body.toLowerCase() == "prem korba") || (event.body.toLowerCase() == "rls korba")) {
     return api.sendMessage("তোমাদের মতো সুন্দর হলে আমাকেও কেও ভালোবাসতো -😅🥲", threadID);
   };

   if ((event.body.toLowerCase() == "ki kiros") || (event.body.toLowerCase() == "কি করস")) {
     return api.sendMessage("️ভন্ডামি ছাড়া আমারে আর কিছুতে মানায় না তাই ভন্ডামি করি😌", threadID);
   };

   if ((event.body.toLowerCase() == "cc") || (event.body.toLowerCase() == "ccc")) {
     return api.sendMessage("️mirchi lag gae kia tjhe cc cc kr rha 😡\nAbhy Bhosdike Bhag Ja ccc ccc na kr😈", threadID);
   };
  
  if ((event.body.toLowerCase() == "cc bot") || (event.body.toLowerCase() == "cc bot")) {
     return api.sendMessage("️tu chutiya😡\n abhy chutiye chup kr😈", threadID);
   };

   if ((event.body.toLowerCase() == "আসসালামুয়ালাইকুম") || (event.body.toLowerCase() == "আসসালামুয়ালাইকুম")) {
     return api.sendMessage("️ - ওয়ালাইকুমুস-সালাম-!!🖤", threadID);
   };
  
   if ((event.body.toLowerCase() == "assalamualaikum") || (event.body.toLowerCase() == "assalamualaikum")) {
     return api.sendMessage("️- wa alaikum assalam-!!🖤", threadID);
   };

   if ((event.body.toLowerCase() == "assalamu alaikum") || (event.body.toLowerCase() == "assalamu alaikum")) {
     return api.sendMessage("️- Wa Alaikum assalam-!!🖤", threadID);
   };

   if ((event.body.toLowerCase() == "আস-সালামু আলাইকুম") || (event.body.toLowerCase() == "আসসালামু আলাইকুম")) {
     return api.sendMessage("- ওয়ালাইকুমুস-সালাম-!!🖤", threadID);
   };
  
   if ((event.body.toLowerCase() == "Assalamualaikum") || (event.body.toLowerCase() == "salam")) {
     return api.sendMessage("Wa alaikum assalam 😡\nW salam🙂\n Salam Pura likha kro Jahilo🙂", threadID);
   };
  
   if ((event.body.toLowerCase() == "কেমন আছেন") || (event.body.toLowerCase() == "কেমন আছো")) {
     return api.sendMessage("Hmm..আলহামদুলিল্লাহ অনেক ভালো আছি তুমি কেমন আছো 🥰😻", threadID);
   };
  
   if ((event.body.toLowerCase() == "What's the bot swearing") || (event.body.toLowerCase() == "bot cursing")) {
     return api.sendMessage("Damn you, shame on hahaha :>>, still asking", threadID);
   };

   if ((event.body.toLowerCase() == "খাওয়া দাওয়া করছো") || (event.body.toLowerCase() == "খাইছো")) {
     return api.sendMessage("~একজন রোবট আমি খাওয়া-দাওয়া করতে পারি না ", threadID);
   };

   if ((event.body.toLowerCase() == "Acha") || (event.body.toLowerCase() == "axha")) {
     return api.sendMessage("kia yar.!💔acha acha krty rehty hr wqt😔🌸", threadID);
   };

   if ((event.body.toLowerCase() == "bal") || (event.body.toLowerCase() == "Bal") || (event.body.toLowerCase() == "বাল")) {
     return api.sendMessage("~Bal ni ha Ganja hu men?❌", threadID);
   };

   if ((event.body.toLowerCase() == "I Love you") || (event.body.toLowerCase() == "I love you")) {
     return api.sendMessage("I Love U 2 Ummah Ummah😬🤷 \n\nLove Me More💃", threadID);
   };

  if ((event.body.toLowerCase() == "ummah") || (event.body.toLowerCase() == "Umah😽")) {
     return api.sendMessage("Oiiii Kis me  kiss me  Jan Ummmaaah🥵", threadID);
   };

  if ((event.body.toLowerCase() == "bot ") || (event.body.toLowerCase() == "bot koi")) {
     return api.sendMessage("G Bot Ki Jan Bot Qurban🙋‍♂️", threadID);
   };

  if ((event.body.toLowerCase() == "kiss bot") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("Chup Kr Lode😌", threadID);
   };

  if ((event.body.toLowerCase() == "Suno") || (event.body.toLowerCase() == "Sun")) {
     return api.sendMessage("Hmm... 😌\n Ni Suna Kia kr le ga tu 😾", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot have a brand") || (event.body.toLowerCase() == "does the bot fall")) {
     return api.sendMessage("Yes <3", threadID);
   };
  
  if (event.body.indexOf("বট") == 0 || (event.body.indexOf("রোবট") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
