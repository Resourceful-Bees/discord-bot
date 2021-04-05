module.exports = {
    name: 'createbee',
    description: 'Create a new bee wiki link',
    cooldown: 5,
    execute(message) {
        message.channel.send("https://wiki.resourcefulbees.com/en/1.16.3/getting_started/bee_creation/");
    },
};