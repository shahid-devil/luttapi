const luttapi = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
luttapi.addCommand({ pattern: 'shazz ?(.*)', fromMe: false, desc: 'owner number' }, (async (message, match) => {

//coded by saidali
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:😈✯ɪͥᴛͭsᷤᴍͫᴇͤ☚⃟፝✪ꜱʜᴀᴢᴢ✯ [ʟᴜᴛᴛᴀᴘɪ]\n' // full name
            + 'ORG:shahid-devil;\n' // 
            + 'TEL;type=CELL;type=VOICE;waid=+994401977063:+916282185054\n' // WhatsApp ID + phone number
            + 'END:VCARD'
await message.client.sendMessage(message.jid,{displayname: "shahid-devil [LUTTAPI]", vcard: vcard}, MessageType.contact)
}))
