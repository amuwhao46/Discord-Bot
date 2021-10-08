module.exports = {
    name = 'ping',
    description='This is a description',

    execute(message, args) {
        message.channel.send = ('pong');
    }
}