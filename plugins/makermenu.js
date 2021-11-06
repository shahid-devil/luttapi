/* Codded by @Shahid-devil
LUTTAPI
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Whats bot - luttapi BOT
*/

const QueenSew = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*type some word after command"

if (Config.STANDSHAZZ == 'off' || Config.STANDSHAZZ == 'OFF') {
if (Config.WORKTYPE == 'private') {

   QueenSew.addCommand({pattern: 'makermenu', fromMe: true}, (async (message, match) => {    

    await message.sendMessage('```❤❤❤❤❤❤❤❤❤❤❤\n\n\n\n👑𝙻𝚄𝚃𝚃𝙰𝙿𝙸 𝚃𝚁𝚇𝚃𝙼𝙰𝙺𝙴𝚁👑```\n_~*coded by shahid-devil*~_\n\n\n\n❤❤❤❤❤❤❤❤❤❤\n\n\n\nClick..👉👉👉 ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​\n\n\n❤\n🌺Usage: *.freefire*\n♻️Desc: Enters the text as the caption for a freefire themed logo.\n🍁 Example : *.freefire luttapi*\n\n🌺Usage: *.cslogo*\n♻️Desc: Enters the text as the caption for a cs go themed logo.\n🍁 Example : *.cslogo luttapi*\n\n🌺Usage: *.crosslogo*\n♻️Desc: Enters the text as the caption for a cross themed logo.\n🍁 Example : *.crosslogo luttapi*\n\n🌺Usage: *.bpink*\n♻️Desc: Enters the text as the caption for a blackpink themed logo.\n🍁 Example : *.bpink luttapi*\n\n🌺Usage: *.ninjalogo*\n♻️Desc: Enters the text as the caption for a ninja themed logo.\n🍁 Example : *.ninjalogo luttapi*\n\n🌺Usage: *.logopubg*\n♻️Desc: Converts the text into a pubg themed image\nYou must enter the heading and subheading seperated by *;* in order!\n🍁 Example : *.logopubg luttapi;Shazz*\n\n🌺Usage: *.water2color*\n♻️Desc: Converts the text into a water themed image\nYou must enter the heading and subheading seperated by *;* in order!\n🍁 Example : *.water2color luttapi;Shazz*\n\n🌺Usage: *.snowwrite*\n♻️Desc: Converts the text into a snowwrite themed image\nYou must enter the heading and subheading seperated by *;* in order!\n🍁 Example : *.snowwrite luttapi;Shazz*\n\n🌺Usage: *.logowolf*\n♻️Desc: Converts the text into a wolf themed image\nYou must enter the heading and subheading seperated by *;* in order!\n🍁 Example : *.logowolf luttapi;Shazz*\n\n🌺Usage: *.sparkling*\n♻️Desc: Converts the text into a sparkling themed imageYou must enter the heading and subheading seperated by *;* in order!\n🍁 Example : *.sparkling luttapi;Shazz*\n\n🌺Usage: *.phub*\n♻️Desc: Converts the text into phub logo.\n🍁 Example : *.phub luttapi/BOT*\n\n🌺Usage: *.1neon*\n♻️Desc: Converts the text into neon themed image.\n🍁 Example : *.1neon luttapi*\n\n🌺Usage: *.naruto*\n♻️Desc: Converts the text into naruto themed image.\n🍁 Example : *.naruto luttapi*\n\n🌺Usage: *.blueneon*\n♻️Desc: Converts the text into blueneon themed image.\n🍁 Example : *.blueneon luttapi*\n\n🌺Usage: *.2hacker*\n♻️Desc: Converts the text into hacker themed image.\n🍁 Example : *.2hacker luttapi*\n\n🌺Usage: *.3hacker*\n♻️Desc: Converts the text into hacker themed image.\n🍁 Example : *.3hacker luttapi*\n\n🌺Usage: *.breakwall*\n♻️Desc: Converts the text into breakwall themed image.\n🍁 Example : *.breakwall luttapi*\n\n🌺Usage: *.dropwater*\n♻️Desc: Converts the text into dropwater themed image.\n🍁 Example : *.dropwater luttapi*\n\n🌺Usage: *.flowertext*\n♻️Desc: Converts the text into flowertext themed image.\n🍁 Example : *.flowertext luttapi*\n\n🌺Usage: *.sliktext*\n♻️Desc: Converts the text into sliktext themed image.\n🍁 Example : *.sliktext luttapi*\n\n🌺Usage: *.flame*\n♻️Desc: Converts the text into flame themed image.\n🍁 Example : *.flame luttapi*\n\n🌺Usage: *.1glow*\n♻️Desc: Converts the text into 1glow themed image.\n🍁 Example : *.1glow luttapi*\n\n🌺Usage: *.skytext*\n♻️Desc: Converts the text into skytext themed image.\n🍁 Example : *.skytext luttapi*\n\n🌺Usage: *.smoke*\n♻️Desc: Converts the text into smoke themed image.\n🍁 Example : *.smoke luttapi*\n\n🌺Usage: *.lithgtext*\n♻️Desc: Converts the text into lithgtext themed image.\n🍁 Example : *.lithgtext luttapi*\n\n🌺Usage: *.sfire*\n♻️Desc: Converts the text into sfire themed image.\n🍁 Example : *.sfire luttapi*\n\n🌺Usage: *.sandw*\n♻️Desc: Converts the text into sandw themed image.\n🍁 Example : *.sandw luttapi*\n\n🌺Usage: *.gplay*\n♻️Desc: Converts the text into gplay themed image.\n🍁 Example : *.gplay luttapi*\n\n🌺Usage: *.splay*\n♻️Desc: Converts the text into splay themed image.\n🍁 Example : *.splay luttapi*\n\n🌺Usage: *.3dbox*\n♻️Desc: Converts the text into 3dbox themed image.\n🍁 Example : *.3dbox luttapi*\n\n🌺Usage: *.leave*\n♻️Desc: Converts the text into leave themed image.\n🍁 Example : *.leave luttapi*\n\n🌺Usage: *.blood*\n♻️Desc: It Sends a blood image of the text provided.\n🍁 Example : *.blood luttapi*\n\n🌺Usage: *.cloud*\n♻️Desc: It Sends a sky image of the text provided\n🍁 Example : *.cloud luttapi*\n\n🌺Usage: *.glue*\n♻️Desc: it makes 3D Glue text\n🍁 Example : *.glue luttapi*\n\n🌺Usage: *.watercolour*\n♻️Desc: Converts the text into a watercolour themed image.\n🍁 Example : *.watercolor luttapi*\n\n🌺Usage: *.neonlight*\n♻️Desc: Converts the text into a neonlight themed image.\n🍁 Example : *.neonlight luttapi*\n\n🌺Usage: *.3dtext*\n♻️Desc: Converts the provided text into a 3D style image.\n🍁 Example : *.3dtext luttapi*\n\n🌺Usage: *.galaxy*\n♻️Desc: it makes metal galaxy text\n🍁 Example : *.galaxy luttapi/BOT*\n\n🌺Usage: *.skull*\n♻️Desc: it makes skull logo\n🍁 Example : *.skull luttapi*\n\n🌺Usage: *.robot*\n♻️Desc: it makes Robot logo\n🍁 Example : *.robot luttapi*\n🌺Usage: *.toxic*\n♻️Desc: it makes Toxic logo\n🍁 Example : *.toxic luttapi*\n\n🌺Usage: *orangeglass*\n♻️Desc: it makes gradient text\n🍁 Example : *.orangeglass luttapi*\n\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n... _*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*_ ...\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷···\n');

    }));
    QueenSew.addCommand({ pattern: '1neon ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/hartatahta?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

    }));
    QueenSew.addCommand({ pattern: 'naruto ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/naruto?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

    }));
    QueenSew.addCommand({ pattern: 'blueneon ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/bneon?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

    }));
    QueenSew.addCommand({ pattern: '2hacker ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/matrix?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

    }));
    QueenSew.addCommand({ pattern: 'breakwall ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/breakwall?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

    }));
    QueenSew.addCommand({ pattern: '3hacker ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/gneon?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

    }));
    QueenSew.addCommand({ pattern: 'dropwater ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/dropwater?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

    }));
    QueenSew.addCommand({ pattern: 'flowertext ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/flowertext?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

    }));
    QueenSew.addCommand({ pattern: 'crosslogo ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/crosslogo?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

    }));
    QueenSew.addCommand({ pattern: 'sliktext ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/silktext?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

    }));
    QueenSew.addCommand({ pattern: 'flame ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/flametext?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

    }));
    QueenSew.addCommand({ pattern: '1glow ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/glowtext?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

    }));
    QueenSew.addCommand({ pattern: 'somke ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/smoketext?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

    }));
    QueenSew.addCommand({ pattern: 'skytext ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/skytext?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

    }));
    QueenSew.addCommand({ pattern: 'cslogo ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/cslogo?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

    }));
    QueenSew.addCommand({ pattern: 'lithgtext ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/lithgtext?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

    }));
    QueenSew.addCommand({ pattern: 'xmas ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/crismes?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

    }));
    QueenSew.addCommand({ pattern: 'sfire ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/tfire?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

    }));
    QueenSew.addCommand({ pattern: 'sandw ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/sandw?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

    }));
    QueenSew.addCommand({ pattern: 'gplay ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/gplaybutton?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

    }));
    QueenSew.addCommand({ pattern: 'splay ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/splaybutton?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

    }));
    QueenSew.addCommand({ pattern: '3dbox ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/text3dbox?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

    }));
    QueenSew.addCommand({ pattern: 'bpink ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/logobp?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

    }));
    QueenSew.addCommand({ pattern: 'leave ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/leavest?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

    }));
    QueenSew.addCommand({pattern: 'logowolf ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var sewimage = await axios.get(`https://api.zeks.xyz/api/wolflogo?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

}));
    QueenSew.addCommand({pattern: 'logopubg ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var sewimage = await axios.get(`https://api.zeks.xyz/api/pubglogo?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

}));
    QueenSew.addCommand({pattern: 'snowwrite ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var sewimage = await axios.get(`https://api.zeks.xyz/api/snowwrite?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

}));
   QueenSew.addCommand({pattern: 'water2color ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var sewimage = await axios.get(`https://api.zeks.xyz/api/watercolour?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

}));
    
}

else if (Config.WORKTYPE == 'public') {

    QueenSew.addCommand({pattern: 'makermenu', fromMe: false,}, (async (message, match) => {    

    await message.sendMessage('```👑𝙻𝚄𝚃𝚃𝙰𝙿𝙸 𝚃𝚁𝚇𝚃𝙼𝙰𝙺𝙴𝚁👑```\n_~*coded by shahid-devil*~_\n\n🌺Usage: *.freefire*\n♻️Desc: Enters the text as the caption for a freefire themed logo.\n🍁 Example : *.freefire luttapi*\n\n🌺Usage: *.cslogo*\n♻️Desc: Enters the text as the caption for a cs go themed logo.\n🍁 Example : *.cslogo luttapi*\n\n🌺Usage: *.crosslogo*\n♻️Desc: Enters the text as the caption for a cross themed logo.\n🍁 Example : *.crosslogo luttapi*\n\n🌺Usage: *.bpink*\n♻️Desc: Enters the text as the caption for a blackpink themed logo.\n🍁 Example : *.bpink luttapi*\n\n🌺Usage: *.ninjalogo*\n♻️Desc: Enters the text as the caption for a ninja themed logo.\n🍁 Example : *.ninjalogo luttapi*\n\n🌺Usage: *.logopubg*\n♻️Desc: Converts the text into a pubg themed image\nYou must enter the heading and subheading seperated by *;* in order!\n🍁 Example : *.logopubg luttapi;Shazz*\n\n🌺Usage: *.water2color*\n♻️Desc: Converts the text into a water themed image\nYou must enter the heading and subheading seperated by *;* in order!\n🍁 Example : *.water2color luttapi;Shazz*\n\n🌺Usage: *.snowwrite*\n♻️Desc: Converts the text into a snowwrite themed image\nYou must enter the heading and subheading seperated by *;* in order!\n🍁 Example : *.snowwrite luttapi;Shazz*\n\n🌺Usage: *.logowolf*\n♻️Desc: Converts the text into a wolf themed image\nYou must enter the heading and subheading seperated by *;* in order!\n🍁 Example : *.logowolf luttapi;Shazz*\n\n🌺Usage: *.sparkling*\n♻️Desc: Converts the text into a sparkling themed imageYou must enter the heading and subheading seperated by *;* in order!\n🍁 Example : *.sparkling luttapi;Shazz*\n\n🌺Usage: *.phub*\n♻️Desc: Converts the text into phub logo.\n🍁 Example : *.phub luttapi/BOT*\n\n🌺Usage: *.1neon*\n♻️Desc: Converts the text into neon themed image.\n🍁 Example : *.1neon luttapi*\n\n🌺Usage: *.naruto*\n♻️Desc: Converts the text into naruto themed image.\n🍁 Example : *.naruto luttapi*\n\n🌺Usage: *.blueneon*\n♻️Desc: Converts the text into blueneon themed image.\n🍁 Example : *.blueneon luttapi*\n\n🌺Usage: *.2hacker*\n♻️Desc: Converts the text into hacker themed image.\n🍁 Example : *.2hacker luttapi*\n\n🌺Usage: *.3hacker*\n♻️Desc: Converts the text into hacker themed image.\n🍁 Example : *.3hacker luttapi*\n\n🌺Usage: *.breakwall*\n♻️Desc: Converts the text into breakwall themed image.\n🍁 Example : *.breakwall luttapi*\n\n🌺Usage: *.dropwater*\n♻️Desc: Converts the text into dropwater themed image.\n🍁 Example : *.dropwater luttapi*\n\n🌺Usage: *.flowertext*\n♻️Desc: Converts the text into flowertext themed image.\n🍁 Example : *.flowertext luttapi*\n\n🌺Usage: *.sliktext*\n♻️Desc: Converts the text into sliktext themed image.\n🍁 Example : *.sliktext luttapi*\n\n🌺Usage: *.flame*\n♻️Desc: Converts the text into flame themed image.\n🍁 Example : *.flame luttapi*\n\n🌺Usage: *.1glow*\n♻️Desc: Converts the text into 1glow themed image.\n🍁 Example : *.1glow luttapi*\n\n🌺Usage: *.skytext*\n♻️Desc: Converts the text into skytext themed image.\n🍁 Example : *.skytext luttapi*\n\n🌺Usage: *.smoke*\n♻️Desc: Converts the text into smoke themed image.\n🍁 Example : *.smoke luttapi*\n\n🌺Usage: *.lithgtext*\n♻️Desc: Converts the text into lithgtext themed image.\n🍁 Example : *.lithgtext luttapi*\n\n🌺Usage: *.sfire*\n♻️Desc: Converts the text into sfire themed image.\n🍁 Example : *.sfire luttapi*\n\n🌺Usage: *.sandw*\n♻️Desc: Converts the text into sandw themed image.\n🍁 Example : *.sandw luttapi*\n\n🌺Usage: *.gplay*\n♻️Desc: Converts the text into gplay themed image.\n🍁 Example : *.gplay luttapi*\n\n🌺Usage: *.splay*\n♻️Desc: Converts the text into splay themed image.\n🍁 Example : *.splay luttapi*\n\n🌺Usage: *.3dbox*\n♻️Desc: Converts the text into 3dbox themed image.\n🍁 Example : *.3dbox luttapi*\n\n🌺Usage: *.leave*\n♻️Desc: Converts the text into leave themed image.\n🍁 Example : *.leave luttapi*\n\n🌺Usage: *.blood*\n♻️Desc: It Sends a blood image of the text provided.\n🍁 Example : *.blood luttapi*\n\n🌺Usage: *.cloud*\n♻️Desc: It Sends a sky image of the text provided\n🍁 Example : *.cloud luttapi*\n\n🌺Usage: *.glue*\n♻️Desc: it makes 3D Glue text\n🍁 Example : *.glue luttapi*\n\n🌺Usage: *.watercolour*\n♻️Desc: Converts the text into a watercolour themed image.\n🍁 Example : *.watercolor luttapi*\n\n🌺Usage: *.neonlight*\n♻️Desc: Converts the text into a neonlight themed image.\n🍁 Example : *.neonlight luttapi*\n\n🌺Usage: *.3dtext*\n♻️Desc: Converts the provided text into a 3D style image.\n🍁 Example : *.3dtext luttapi*\n\n🌺Usage: *.galaxy*\n♻️Desc: it makes metal galaxy text\n🍁 Example : *.galaxy luttapi/BOT*\n\n🌺Usage: *.skull*\n♻️Desc: it makes skull logo\n🍁 Example : *.skull luttapi*\n\n🌺Usage: *.robot*\n♻️Desc: it makes Robot logo\n🍁 Example : *.robot luttapi*\n🌺Usage: *.toxic*\n♻️Desc: it makes Toxic logo\n🍁 Example : *.toxic luttapi*\n\n🌺Usage: *orangeglass*\n♻️Desc: it makes gradient text\n🍁 Example : *.orangeglass luttapi*\n\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n... _*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*_ ...\n· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·· ··÷¦÷·· ·\n');

    }));

    QueenSew.addCommand({ pattern: '1neon ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/hartatahta?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

    }));
    QueenSew.addCommand({ pattern: 'naruto ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/naruto?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

    }));
    QueenSew.addCommand({ pattern: 'blueneon ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/bneon?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

    }));
    QueenSew.addCommand({ pattern: '2hacker ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/matrix?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

    }));
    QueenSew.addCommand({ pattern: 'breakwall ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/breakwall?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

    }));
    QueenSew.addCommand({ pattern: '3hacker ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/gneon?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

    }));
    QueenSew.addCommand({ pattern: 'dropwater ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/dropwater?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

    }));
    QueenSew.addCommand({ pattern: 'flowertext ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/flowertext?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

    }));
    QueenSew.addCommand({ pattern: 'crosslogo ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/crosslogo?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

    }));
    QueenSew.addCommand({ pattern: 'sliktext ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/silktext?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

    }));
    QueenSew.addCommand({ pattern: 'flame ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/flametext?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

    }));
    QueenSew.addCommand({ pattern: '1glow ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/glowtext?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

    }));
    QueenSew.addCommand({ pattern: 'somke ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/smoketext?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

    }));
    QueenSew.addCommand({ pattern: 'skytext ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/skytext?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

    }));
    QueenSew.addCommand({ pattern: 'cslogo ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/cslogo?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

    }));
    QueenSew.addCommand({ pattern: 'lithgtext ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/lithgtext?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

    }));
    QueenSew.addCommand({ pattern: 'xmas ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/crismes?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

    }));
    QueenSew.addCommand({ pattern: 'sfire ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/tfire?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

    }));
    QueenSew.addCommand({ pattern: 'sandw ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/sandw?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

    }));
    QueenSew.addCommand({ pattern: 'gplay ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/gplaybutton?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

    }));
    QueenSew.addCommand({ pattern: 'splay ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/splaybutton?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

    }));
    QueenSew.addCommand({ pattern: '3dbox ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/text3dbox?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

    }));
    QueenSew.addCommand({ pattern: 'bpink ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/logobp?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

    }));
    QueenSew.addCommand({ pattern: 'leave ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var sewimage = await axios.get(`https://api.zeks.xyz/api/leavest?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text=${encodeURIComponent(match[1])}&text2=manoj`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(sewimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

    }));
    QueenSew.addCommand({pattern: 'logowolf ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var sewimage = await axios.get(`https://api.zeks.xyz/api/wolflogo?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

}));
    QueenSew.addCommand({pattern: 'logopubg ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var sewimage = await axios.get(`https://api.zeks.xyz/api/pubglogo?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

}));
    QueenSew.addCommand({pattern: 'snowwrite ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var sewimage = await axios.get(`https://api.zeks.xyz/api/snowwrite?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

}));
   QueenSew.addCommand({pattern: 'water2color ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,need);
  
  var topText, bottomText;
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        bottomText = split[1];
        topText = split[0];
}

    var sewimage = await axios.get(`https://api.zeks.xyz/api/watercolour?apikey=51gKpN0d0bVhPtICxVvVVsdOq8m&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*𝕄𝕒𝕕𝕖 𝕓𝕪 𝕝𝕦𝕥𝕥𝕒𝕡𝕚🤗*' })

}));
}
}
