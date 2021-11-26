/* codded by afnanplk
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// PLK Special Functions
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
 SHAZZAFN: process.env.BAD_WORDS === undefined ? false : process.env.BAD_WORDS,
 DESC: process.env.BOT_DESCRIPTION === undefined ? '💥 𝐏𝐄𝐖𝐄𝐑 𝐈𝐒 𝐏𝐄𝐖𝐄𝐑 💥' : process.env.BOT_DESCRIPTION,
 PHONE: process.env.NUMBER === undefined ? '+918301985859' : process.env.NUMBER,   
 OA_NAME: process.env.DEPLOYER === undefined ? 'Someone' : process.env.DEPLOYER,    
};
