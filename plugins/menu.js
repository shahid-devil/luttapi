/* codded by Shahid ser
LUTTAPI
use this git under copyright
dont change credit
*/

const luttapi= require('../events');
const config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const hrs = new Date().getHours({ timeZone: 'Asia/Kolkata' })

luttapi.addCommand({pattern: 'menu', fromMe: false, desc: 'it send bot menu'}, (async (message, match) => {

    var a_shazz = new Array ();
    
    
        a_shazz[0] = "https://i.imgur.com/JbnQIUi.jpeg";
        a_shazz[1] = "https://i.imgur.com/UNxGuRN.jpeg";
        a_shazz[2] = "https://i.imgur.com/N2wUmvZ.jpeg";
        a_shazz[3] = "https://i.imgur.com/1RIOpsu.jpeg";
        a_shazz[4] = "https://i.imgur.com/hWtoqYC.jpeg";
        a_shazz[5] = "https://i.imgur.com/zdcqaaG.jpeg";
        a_shazz[6] = "https://i.imgur.com/bDJBX99.jpeg";
        a_shazz[7] = "https://i.imgur.com/Aj3emqd.jpeg";
        a_shazz[8] = "https://i.imgur.com/zSi66Uj.jpeg";
        a_shazz[9] = "https://i.imgur.com/0brHoyn.jpeg";
        a_shazz[10] = "https://i.imgur.com/5s7aHIp.jpeg";
	a_shazz[11] = "https://i.imgur.com/eeIRY92.jpeg";
        a_shazz[12] = "https://i.imgur.com/Nwez5Ot.jpeg";
         var i = Math.floor(13*Math.random())


    var respoimage = await axios.get(`${a_shazz[i]}`, { responseType: 'arraybuffer' })

    var time = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]

    var wish = ''
     
    var eva = ''

    var auto_bio = ''

    var language = ''

if (hrs < 12) wish = '*ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ ⛅*'
if (hrs >= 12 && hrs <= 17) wish = '*ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ 🌞*'
if (hrs >= 17 && hrs <= 19) wish = '*ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌥*'
if (hrs >= 19 && hrs <= 24) wish = '*ɢᴏᴏᴅ ɴɪɢʜᴛ 🌙*'

if (config.FULLEVA == 'true') eva = 'On'
if (config.FULLEVA == 'false') eva = 'Off'
if (config.AUTOBİO == 'true') auto_bio = 'On'
if (config.AUTOBİO == 'false') auto_bio = 'Off'

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, contextInfo: {mentionedJid: message.mention}, caption: `┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
   ` ᴍᴀᴅᴇ ʙʏ Sʜᴀʜɪᴅ Sᴇʀ😈 `
┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛
┣
┣ ʜᴇʏ ᴜsᴇʀ ` + wish + `
┣         *⌚` + time + `*
┣
┣𝕾⃝🌺 *ᴅᴇᴠᴇʟᴏʟᴇʀ* : ✯ɪͥᴛͭsᷤᴍͫᴇͤ☚⃟፝✪ꜱʜᴀᴢᴢ✯
┣𝕾⃝🌺 *BOT* : ʟᴜᴛᴛᴀᴘɪ
┣𝕾⃝🌺 *ᴠᴇʀsɪᴏɴ* : 2.0.0
┣𝕾⃝🌺 *ғᴜʟʟ ᴇᴠᴀ* : ` + eva + `
┣𝕾⃝🌺 *ᴀᴜᴛᴏ ʙɪᴏ* : ` + auto_bio + `
┣𝕾⃝🌺 *ᴍᴏᴅᴇ* : ᴘᴜʙʟɪᴄ
┣𝕾⃝🌺 *ᴘʀᴇғɪx* : *. ; !*
┣
┣      ▎▍▌▌▉▏▎▌▉▐▏▌▎
┣      ▎▍▌▌▉▏▎▌▉▐▏▌▎
┣       ©916282185054
┣
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┓
 ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ 
┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛
┣ ◩ ᴍᴇɴᴜ ◪
┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛
┣
┣[ ᴍᴇᴅɪᴀ ]
┣
┣𝕾⃝🌺 .sᴏɴɢ
┣𝕾⃝🌺 .ᴠɪᴅᴇᴏ
┣𝕾⃝🌺 .ɪɴsᴛᴀ
┣𝕾⃝🌺 .ʏᴛ
┣         
┣[ ᴄᴏɴᴠᴇʀᴛ ]
┣
┣𝕾⃝🌺 .ɢɪғ
┣𝕾⃝🌺 .ᴍᴘ3
┣𝕾⃝🌺 .ᴛᴛs
┣𝕾⃝🌺 .ɪᴍɢ
┣𝕾⃝🌺 .sᴛɪᴄᴋᴇʀ
┣𝕾⃝🌺 .ᴀᴛᴛᴘ
┣𝕾⃝🌺 .ᴛᴛᴘ
┣𝕾⃝🌺 .ᴘʜᴏᴛᴏ
┣𝕾⃝🌺 .2ɪᴍɢ
┣
┣[ ᴍᴀᴋᴇʀ ]
┣
┣𝕾⃝🌺 .ʟᴏɢᴏ
┣𝕾⃝🌺 .ᴍᴏʀᴇᴛxᴛ
┣𝕾⃝🌺 .ᴍᴍᴘᴀᴄᴋ
┣𝕾⃝🌺 .ᴍᴀᴋᴇʀᴍᴇɴᴜ
┣𝕾⃝🌺 .ᴛxᴛɪᴛ
┣ 
┣[ ғᴜɴ ]
┣
┣𝕾⃝🌺 .ᴊᴏᴋᴇ
┣𝕾⃝🌺 .ᴍᴇᴍᴇ
┣𝕾⃝🌺 .ǫʀ
┣𝕾⃝🌺 .ᴄʜᴀɴɢᴇsᴀʏ
┣𝕾⃝🌺 .ᴛʀᴜᴍᴘsᴀʏ
┣𝕾⃝🌺 .ᴄᴏᴍᴘʟɪᴍᴇɴᴛ
┣
┣[ sᴇᴀʀᴄʜ ]
┣ 
┣𝕾⃝🌺 .ᴡɪᴋɪ
┣𝕾⃝🌺 .ʟʏʀɪᴄ
┣𝕾⃝🌺 .sʜᴏᴡ
┣𝕾⃝🌺 .ᴍᴏᴠɪᴇ
┣𝕾⃝🌺 .ᴡᴇᴀᴛʜᴇʀ
┣
┣[ ᴛᴀɢ ]
┣
┣𝕾⃝🌺 .ᴛᴀɢᴀʟʟ
┣𝕾⃝🌺 .ᴛᴀɢᴀᴅᴍɪɴ
┣
┣[ ᴏᴛʜᴇʀ ]
┣ 
┣𝕾⃝🌺 .ᴀɴɪᴍᴇ
┣𝕾⃝🌺 .ᴡᴀʟʟᴘᴀᴘᴇʀ
┣𝕾⃝🌺 .ss
┣𝕾⃝🌺 .ᴅɪᴄᴛ
┣𝕾⃝🌺 .sʜᴏʀᴛ
┣𝕾⃝🌺 .ᴛʀᴛ
┣𝕾⃝🌺 .ʀᴇᴍᴏᴠᴇʙɢ
┣ 
┣[ ᴏᴡɴᴇʀ ᴄᴍɴᴅs ]
┣
┣𝕾⃝🌺 .ғᴜʟʟᴇᴠᴀ 
┣𝕾⃝🌺 .ᴀᴜᴛᴏʙɪᴏ
┣𝕾⃝🌺 .ʙᴀɴ
┣𝕾⃝🌺 .ᴀᴅᴅ
┣𝕾⃝🌺 .ᴘʀᴏᴍᴏᴛᴇ
┣𝕾⃝🌺 .ᴅᴇᴍᴏᴛᴇ
┣𝕾⃝🌺 .ᴍᴜᴛᴇ
┣𝕾⃝🌺 .ᴜɴᴍᴜᴛᴇ
┣𝕾⃝🌺 .ɪɴᴠɪᴛᴇ
┣𝕾⃝🌺 .sᴇᴛᴠᴀʀ
┣ 
┣
┣  ❏😈ʟᴜᴛᴛᴀᴘɪ ʙᴏᴛ😈❏
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍┛
`}) 

}));
