const { Client, Intents } = require('discord.js');    
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] }); 

client.once('ready', ()=> {
    console.log('Bill Bob is here!')
})

// test
client.login('[REDACTED]')