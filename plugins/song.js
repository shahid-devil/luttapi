const Asena = require('../events');
const { MessageType, Mimetype } = require('@adiwajshing/baileys');
const got = require('got');
const LOAD_ING = "```Result found...```"
const Config = require('../config');
const axios = require('axios')
const Axios = require('axios')


Asena.addCommand({pattern: 'song ?(.*)', fromMe: false, desc: 'play song' , dontAddCommandList: true }, async (message, match) => {
	
	await message.client.sendMessage(message.jid, '```hey dude wait cheyy```' , MessageType.text, { quoted: message.data });
	
	const {data} = await axios(`https://zenzapi.xyz/api/play/playmp3?query=${match[1]}&apikey=whitedevil-terrorboy`)
	
        const { status, result } = data
	
	var img = await Axios.get(`${result.thumb}`, {responseType: 'arraybuffer'})
	
        if(!status) return await message.sendMessage('```NO RESULT FOUND```')
	
        await message.client.sendMessage(message.jid, LOAD_ING , MessageType.text, { quoted: message.data });
        let msg = '```'
        msg +=  `TITLE :${result.title}\n\n`        
        msg += '```'
        return await message.client.sendMessage(message.jid,Buffer.from(img.data), MessageType.image, {mimetype: Mimetype.jpg , caption: msg })
        return await message.client.sendMessage(message.jid,Buffer.from(audioBuffer.data), MessageType.document, {filename: msg , mimetype: Mimetype.webma,  quoted : message.data }) 
        return await message.client.sendMessage(message.jid,Buffer.from(writer.arrayBuffer), MessageType.audio, {quoted: message.data , mimetype: Mimetype.mp4Audio, ptt: false})
        return await message.client.sendMessage(message.jid,Buffer.from(writer.arrayBuffer), MessageType.document, {filename: match[1].replace('mp3', config.AFN) + '.mp3', mimetype: 'audio/mpeg',quoted: message.data});
        });
