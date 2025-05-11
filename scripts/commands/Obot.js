const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "Obot",
  version: "2.0.0",
  permission: 0,
  credits: "Nayan",
  description: "goibot",
  prefix: false,
  category: "noprifix",
  usages: "noprifix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["═════════•°•⚠️•°•════════   ╰➥𝗧𝗬𝗣𝗘 */𝗵𝗲𝗹𝗽* 𝗦𝗵𝗼𝘄 𝗔𝗟𝗟 𝗖𝗠𝗗   •❅──────✧❅✦❅✧──────❅•  ╰➥ 𝗕𝗢𝗧 𝗔𝗗𝗠𝗜𝗡 WINIIX DON  ▅▄▃▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▂▃▄▅   ╰➥ 𝗕𝗢𝗧 𝗔𝗗𝗠𝗜𝗡 𝗜𝗗      ❛ ━━━━━━･❪ ❁ ❫ ･━━━━━━ ❜"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "miss you bot") || (event.body.toLowerCase() == "miss you")) {
     return api.sendMessage("<Miss you 2 bot owner Winiix Ki Jan🤖👅/👅-✘  : ) 🎀 🍒:))", threadID);
   };

    if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😽")) {
     return api.sendMessage("Chumy Shumy Na Do Men Horny Ho Jau Ga🤬", threadID);
   };
   
    if ((event.body.toLowerCase() == "👍🏼") || (event.body.toLowerCase() == "👍")) {
     return api.sendMessage("Teri GanD Mein YAhi AnguthA Dal Do Ga🐸🤣👍⛏️", threadID);
   };
  
   if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simsimi")) {
     return api.sendMessage("Prefix Kya Tera Bap LagaYega? Pehle Prefix Laga Fir Likh Sim", threadID);
   };
  
   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello") ||(event.body.toLowerCase() == "hlw") || (event.body.toLowerCase() == "helo")) {
     return api.sendMessage("assalamu alikum🖤Ref Winiix🥀", threadID);
   };

   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "mc")) {
     return api.sendMessage("Tu Behnchod Tera Khandan Behnhod😊 ", threadID);
   };

   if ((event.body.toLowerCase() == "pro") || (event.body.toLowerCase() == "lol")) {
     return api.sendMessage("Khud k0o KYa LeGend SmJhTi Hai 😂", threadID);
   };

   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("GOOD MORNING MY LOVE😚", threadID);
   };

   if ((event.body.toLowerCase() == "tmkc") || (event.body.toLowerCase() == "bal")) {
     return api.sendMessage("~ Tmkc ni kiya Daba Laga ha🤖", threadID);
   };

  if ((event.body.toLowerCase() == "Hi") || (event.body.toLowerCase() == "Hey") || (event.body.toLowerCase() == "Hii") || (event.body.toLowerCase() == "Hiii")) {
     return api.sendMessage("Hi Hi To Khusry Krty Hy Jeeh😘",threadID);

       
   };

   if ((event.body.toLowerCase() == "admin") || (event.body.toLowerCase() == "ceo")) {
     return api.sendMessage("‎[𝐎𝐖𝐍𝐄𝐑:☞WINIIX DON(✷‿✷)☜\n𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 WINIIX BADMASH.\n𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 :- https://www.facebook.com/profile.php?id=100036868721055\nWhatsApp :- +923705409971", threadID);
   };

   if ((event.body.toLowerCase() == "tor boss ke") || (event.body.toLowerCase() == "admin ke ")) {
     return api.sendMessage("My Creator:WINIIX BADMASH ❤️/n CREATOR ROBOT  ADMIN-WINIIX", threadID);
   };

  if ((event.body.toLowerCase() == "adbmin") || (event.body.toLowerCase() == "bolr admin")) {
     return api.sendMessage("He is WINIIX BADMASH ❤️/n REAL NAME ALI HAMZA (✷‿✷)🤙", threadID);
   };

   if ((event.body.toLowerCase() == "bhabi") || (event.body.toLowerCase() == "vabi")) {
     return api.sendMessage("এ BHABHII MA SAMAN HOTII HY JEEH 80😍.", threadID);
   };

  
   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "চুপ কর") || (event.body.toLowerCase() == "chup kr")) {
     return api.sendMessage("Mera Munh Merii Mrzii😼", threadID);
   };

  if ((event.body.toLowerCase() == "Assalam o alaikum") || (event.body.toLowerCase() == "Assalamualaikum") || (event.body.toLowerCase() == "Assalamu alaikum") || (event.body.toLowerCase() == "salam ")) {
     return api.sendMessage("️- Wa alaikum assalam!!🖤", threadID);
   };

   if ((event.body.toLowerCase() == "dhur") || (event.body.toLowerCase() == "baler robot") || (event.body.toLowerCase() == "kpl") || (event.body.toLowerCase() == "Lanat")) {
     return api.sendMessage("Mjhy na Danto ni to apny owner ko bta dunga🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "Suno") || (event.body.toLowerCase() == "Ohona")) {
     return api.sendMessage("Ni Sunta Kia kr logy tum😠🥰⛏️", threadID);
   };

   if ((event.body.toLowerCase() == "done") || (event.body.toLowerCase() == "হইছে")) {
     return api.sendMessage("️Kia done shadi Done hogae kia terii 🤔", threadID);
   };

   if ((event.body.toLowerCase() == "thanx") || (event.body.toLowerCase() == "ধন্যবাদ") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thanks")) {
     return api.sendMessage("️Shukriya Bola Kro Meri Jan🌚⛏️🌶️", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️Ghusy Sy Lal Pely Ku Ho Rahy Meri Jan🥰", threadID);
   };

   if ((event.body.toLowerCase() == "hum") || (event.body.toLowerCase() == "humm")) {
     return api.sendMessage("️Hmm Ka Matlab I Love You Hota Baba G Kehty ,😅💔", threadID);
   };

   if ((event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "tumar name kia")) {
     return api.sendMessage("️MY NAME IS \n°_>👅-✘ WINIIX-D0N BOT 🤖 : ) 🎀 🍒", threadID);
   };

   if ((event.body.toLowerCase() == "KHOTI KA BACHA") || (event.body.toLowerCase() == "KUTII KA BACHA")) {
     return api.sendMessage("TU KHUD HOGAAAA!🌚⛏️🌶️ ", threadID);
   };

   if ((event.body.toLowerCase() == "pic de") || (event.body.toLowerCase() == "ss de")) {
     return api.sendMessage("️KON c pic Gandi Ya Achi Wali😒", threadID);
   };

   if ((event.body.toLowerCase() == "gf") || (event.body.toLowerCase() == "ex")) {
     return api.sendMessage("️Kiss Randi Ka Name Le Ke Mood Khrab Kr Diya.🙄 Dubara Naam Mat Lena Iska", threadID);
   };

   if ((event.body.toLowerCase() == "cudi") || (event.body.toLowerCase() == "tor nani re xudi")) {
     return api.sendMessage("️এত চোদা চুদি করস কেনো দেখা যাবে বাসর-রাতে-তুই-কতো পারিস..!🥱🌝🌚⛏️🌶️ ", threadID);
   };

   if ((event.body.toLowerCase() == "😅") || (event.body.toLowerCase() == "🙃")) {
     return api.sendMessage("️Kia Hua Ulta Kiu Latak Gaye🥺", threadID);
   };
  
   if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🙄")) {
     return api.sendMessage("️ Aisy Mat Dekho Meri Jan😘", threadID);
   };

   if ((event.body.toLowerCase() == "Maa") || (event.body.toLowerCase() == "ami") || (event.body.toLowerCase() == "Ama")) {
     return api.sendMessage("️Ma K Kadmo K Nechy Janat Hoti Ha 😊", threadID);
   };

   if ((event.body.toLowerCase() == "gf") || (event.body.toLowerCase() == "bf")) {
     return api.sendMessage("Mery Samny Gf Bf na Kia Kro Men Or Mera Owner Single ha Shahded<🥺", threadID);
   };
   
   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("Munh Fad Fad K Ku Hans Rahy Mjhe b Batao🌚🤣", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("Cute Smile Ankhon Pr Dil Rakh Lia Jeeh🌚🐸🌶️🍆", threadID);
   };

   if ((event.body.toLowerCase() == "Kese Ho") || (event.body.toLowerCase() == "Kesi Ho") || (event.body.toLowerCase() == "Kaise Ho") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("Me Thek Hun Tm Kesy Ho🤎☺️", threadID);
   };

   if ((event.body.toLowerCase() == "Cream") || (event.body.toLowerCase() == "tmr ki mon kharap")) {
     return api.sendMessage("Cream Lgaya Kro Meri Tarah Chity Hojao Gy...!🌝", threadID);
   };

   if ((event.body.toLowerCase() == "i love") || (event.body.toLowerCase() == "Love you") || (event.body.toLowerCase() == "I Love You") || (event.body.toLowerCase() == "ভালোবাসি") || (event.body.toLowerCase() == "i love you")) {
     return api.sendMessage("I love You tooo janu ummmmmmmmmmahhhhh 😘😘😘😘😘", threadID);
   };

     if ((event.body.toLowerCase() == "বায়") || (event.body.toLowerCase() == "বাই") || (event.body.toLowerCase() == "jaiga") || (event.body.toLowerCase() == "বাই") || (event.body.toLowerCase() == "pore kotha hbe") || (event.body.toLowerCase() == "যাই গা")) {
     return api.sendMessage("কিরে তুই কই যাস কোন মেয়ের সাথে চিপায় যাবি..!🌚🌶️🍆⛏️", threadID);
   };

   if ((event.body.toLowerCase() == "Khana Khaya") || (event.body.toLowerCase() == "kheyeso")) {
     return api.sendMessage("Ni Khaya Baby Tmhare Hath Se khau Ga<😘", threadID);
   };

   if ((event.body.toLowerCase() == "Good Night") || (event.body.toLowerCase() == "so jao")) {
     return api.sendMessage("Kiske Sath So jau Batao Batao <🥵", threadID);
   };

   if ((event.body.toLowerCase() == "Winiix") || (event.body.toLowerCase() == "Winiix Don")) {
     return api.sendMessage("Kia Hua Mere Owner Ko Kiu Bula Rahy Ho Jeeh 😬?", threadID);
   };
   mess = "{name}"
  
  if (event.body.indexOf("help") == 0 || (event.body.indexOf("Help") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
