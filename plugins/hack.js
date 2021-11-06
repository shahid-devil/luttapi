/*coded by shahid-devil
LUTTAPI
copy അടിക്കുമ്പോൾ പേര് മാറ്റരുത് ഒരുപാട് ദിവസത്തെ കഷ്ടപ്പാട് ആണ്
Contact me :
https://wa.me//916282185054
*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const config = require('../config');

// Descriptions
const deceit = "Hacked to the person who answers the message."

// Need Reply
const enrep = "``` You must answer some message! ```"

if (config.WORKTYPE === 'public') {
    
    Asena.addCommand({pattern: 'hack', fromMe: true, OnlyGroup: true, desc: deceit}, (async (message, match) => {
    
    if (message.reply_message === false) return await message.client.sendMessage(message.jid, enrep, MessageType.text);

    await message.client.sendMessage(message.jid, '*Hacking A*' + '@' + message.reply_message.jid.split('@')[0] + '... >:)', MessageType.text, {
        quotedMessage: message.reply_message.data, contextInfo: {mentionedJid: [message.reply_message.jid.replace('c.us', 's.whatsapp.net')]}

            });

    await new Promise(r => setTimeout(r, 1500));
    await message.sendMessage('Python Version: 3.6\nHacker: *Shahid ser*\nWEB API: True');
    await new Promise(r => setTimeout(r, 1200));
    await message.sendMessage('██╗░░██╗\n██║░░██║\n███████║\n██╔══██║\n██║░░██║\n╚═╝░░╚═╝');
    await new Promise(r => setTimeout(r, 700));
    await message.sendMessage('░█████╗░\n██╔══██╗\n███████║\n██╔══██║\n██║░░██║\n╚═╝░░╚═╝');
    await new Promise(r => setTimeout(r, 700));
    await message.sendMessage('░█████╗░\n██╔══██╗\n██║░░╚═╝\n██║░░██╗\n╚█████╔╝\n░╚════╝░');
    await new Promise(r => setTimeout(r, 700));
    await message.sendMessage('██╗░░██╗\n██║░██╔╝\n█████═╝░\n██╔═██╗░\n██║░╚██╗\n╚═╝░░╚═╝');
    await new Promise(r => setTimeout(r, 700));
    await message.sendMessage('██╗\n██║\n██║\n██║\n██║\n╚═╝');
    await new Promise(r => setTimeout(r, 700));
    await message.sendMessage('███╗░░██╗\n████╗░██║\n██╔██╗██║\n██║╚████║\n██║░╚███║\n╚═╝░░╚══╝');
    await new Promise(r => setTimeout(r, 700));
    await message.sendMessage('░██████╗░\n██╔════╝░\n██║░░██╗░\n██║░░╚██╗\n╚██████╔╝\n░╚═════╝░');

    await new Promise(r => setTimeout(r, 1500));

    await message.sendMessage('*¡The target system is being hacked right now!*\n𝕎𝕙𝕒𝕥𝕤𝔸𝕡𝕡: 1%\n𝔾𝕒𝕝𝕖𝕣í𝕒: 3%\n𝔻𝕠𝕔𝕦𝕞𝕖𝕟𝕥𝕠𝕤: 6%\n𝔸𝕣𝕔𝕙𝕚𝕧𝕠𝕤: 1%\nℂá𝕞𝕒𝕣𝕒: 3%');
    await new Promise(r => setTimeout(r, 1700));
    await message.sendMessage('*Execution process ...*\n𝕎𝕙𝕒𝕥𝕤𝔸𝕡𝕡: 18%\n𝔾𝕒𝕝𝕖𝕣í𝕒: 25%\n𝔻𝕠𝕔𝕦𝕞𝕖𝕟𝕥𝕠𝕤: 34%\n𝔸𝕣𝕔𝕙𝕚𝕧𝕠𝕤: 14%\nℂá𝕞𝕒𝕣𝕒: 16%');
    await new Promise(r => setTimeout(r, 1700));
    await message.sendMessage('*Hacking the system security system*\n𝕎𝕙𝕒𝕥𝕤𝔸𝕡𝕡: 48%\n𝔾𝕒𝕝𝕖𝕣í𝕒: 44%\n𝔻𝕠𝕔𝕦𝕞𝕖𝕟𝕥𝕠𝕤: 57%\n𝔸𝕣𝕔𝕙𝕚𝕧𝕠𝕤: 14%\nℂá𝕞𝕒𝕣𝕒: 62%');
    await new Promise(r => setTimeout(r, 1700));
    await message.sendMessage('*Eliminating system locks ...*\n𝕎𝕙𝕒𝕥𝕤𝔸𝕡𝕡: 68%\n𝔾𝕒𝕝𝕖𝕣í𝕒: 84%\n𝔻𝕠𝕔𝕦𝕞𝕖𝕟𝕥𝕠𝕤: 92%\n𝔸𝕣𝕔𝕙𝕚𝕧𝕠𝕤: 89%\nℂá𝕞𝕒𝕣𝕒: 86%');
    await new Promise(r => setTimeout(r, 1700));
    await message.sendMessage('*Connecting to the destination account using the WHATSAPP Web API*\n𝕎𝕙𝕒𝕥𝕤𝔸𝕡𝕡: 93%\n𝔾𝕒𝕝𝕖𝕣í𝕒: 90%\n𝔻𝕠𝕔𝕦𝕞𝕖𝕟𝕥𝕠𝕤: 88%\n𝔸𝕣𝕔𝕙𝕚𝕧𝕠𝕤: 94%\nℂá𝕞𝕒𝕣𝕒: 96%');
    await new Promise(r => setTimeout(r, 1700));
    await message.sendMessage('😎 *Hacked account*\n𝕎𝕙𝕒𝕥𝕤𝔸𝕡𝕡: 100%\n𝔾𝕒𝕝𝕖𝕣í𝕒: 100%\n𝔻𝕠𝕔𝕦𝕞𝕖𝕟𝕥𝕠𝕤: 100%\n𝔸𝕣𝕔𝕙𝕚𝕧𝕠𝕤: 100%\nℂá𝕞𝕒𝕣𝕒: 100%');

    await new Promise(r => setTimeout(r, 2500));

    await message.sendMessage('*Saved information in the shahid ser database😈 >:D*');

}));

Asena.addCommand({pattern: 'chocolate', fromMe: true, OnlyGroup: true}, (async (message, match) => {

    await message.sendMessage('{__/}\n( • - • )\n/>🍫 I give you a chocolate');
    await new Promise(r => setTimeout(r, 1000));
    await message.sendMessage('{__/}\n( • - • )\n🍫 <   Or not. you already have');
    await new Promise(r => setTimeout(r, 1000));
    await message.sendMessage('{__/}\n( • - • )\n/>🍫 I can not sacrifice you ...');
    await new Promise(r => setTimeout(r, 1000));
    await message.sendMessage('{__/}\n( • - • )\n/>☕️ I better give you this');
    await new Promise(r => setTimeout(r, 1000));
    await message.sendMessage('{__/}\n( • - • )\n/>❤️ Take this too but do not break it, please');
    await new Promise(r => setTimeout(r, 1000));
    await message.sendMessage('{__/}\n( • - • )\n/>💔 I said that you do not break it');
    await new Promise(r => setTimeout(r, 1000));
    await message.sendMessage('{__/}\n( • - • )\n💔< You must repent to have done it ...');
    await new Promise(r => setTimeout(r, 1000));
    await message.sendMessage('{__/}\n( • - • )\n/> ❤️ Or it takes another ...');
    await new Promise(r => setTimeout(r, 1000));
    await message.sendMessage('{__/}\n( • - • )\n/>💔 🐱');
    await new Promise(r => setTimeout(r, 1000));
    await message.sendMessage('{__/}\n( • - • )\n/>❤️ if this once more, but if you break it I will get angry...');
    await new Promise(r => setTimeout(r, 1800));

    await message.sendMessage('made by *Shahid ser* >:D');

}));
}

