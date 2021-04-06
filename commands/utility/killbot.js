module.exports = {
    name: 'killbot',
    description: 'Kills running bot',
    permissions: 'ADMINISTRATOR',
    execute(message) {
        message.channel.send(`Killing Beekeeper bot`);
        process.kill(process.pid);
    }
};