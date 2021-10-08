const { Client, Intents } = require('discord.js');    
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] }); 
const prefix = '%' // Bot Prefix


// Bot is online
client.once('ready', ()=> {
    console.log('Bill Bob is here!')
})

// check
client.on('message', message =>{
    // Checks if message starts with prefix or if bot sent prefix
    if(!message.content.startsWith(prefix) || message.author.bot)  return;

    // command slicer
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase(); // takes prefix out

    // Display's to user
    if(command === 'ping')
        message.channel.send('pong!')
});




client.login('[REDACTED]')