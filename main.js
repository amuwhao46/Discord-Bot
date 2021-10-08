const { Client, Intents, Collection } = require('discord.js');    
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] }); 
const prefix = '%' // Bot Prefix
const fs = require('fs');

client.commands = new Collection();
// Filters out and finds only .js files
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require (`./commands/${file}`)
}
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
    if(command === 'ping') {
        client.commands.get('ping').execute(message, args);
    } else if (command === 'zig') {
        message.channel.send('zag!');
    }
});




client.login('[REDACTED]')