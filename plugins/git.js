const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const fs = require("fs")
const Language = require('../language');
const Lang = Language.getString('gitlink');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.GL}, (async (message, match) => {

    var respoimage = await axios.get(config.Minx, { responseType: 'arraybuffer' })


    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {quoted: message.data , thumbnail: fs.readFileSync('liza mwol v2.jpg'), mimetype: Mimetype.png, caption: `~========~ ʟɪɴᴋs ~========~ 
 
ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ wa.me/918590451659
   
ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ wa.me/917994761437


Wʜᴀᴛsᴀᴘᴘ ɢʀᴏᴜᴘ : https://chat.whatsapp.com/Bkr0eUKoVse2VgmFazzk4t


ɢɪᴛʜᴜʙ ʟɪɴᴋ : https://github.com/AXN4/Minx

 
`}) 

})); 
