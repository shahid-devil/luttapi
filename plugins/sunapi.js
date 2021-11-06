/* Codded bysisula
*/
const Asena = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');

// LIST
const EFFECT_DESC = "A set of commands to convert text effective images."
const NEED_WORD = "*You must enter a word*"

if (Config.STANDSHAZZ == 'off' || Config.STANDSHAZZ == 'OFF') {
if (Config.WORKTYPE == 'public') {

     Asena.addCommand({pattern: 'chavar ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var ttinullimage = await axios.get(`https://zenzapi.xyz/api/photooxy/gtaposter?image=${match[1]}&apikey=e75b25d89d`, { responseType: 'arraybuffer' })

   await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'cobra bot'})

    }));
        
    Asena.addCommand({pattern: 'gta ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var ttinullimage = await axios.get(`https://zenzapi.xyz/api/photooxy/gtaposter?image=${match[1]}&apikey=e75b25d89d`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Cobrabot'})

    }));
        
    Asena.addCommand({pattern: 'circle ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);

    var ttinullimage = await axios.get(`https://zenzapi.xyz/api/circle?image=${match[1]}&apikey=e75b25d89d`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Cobrabot'})

    }));
}
}
