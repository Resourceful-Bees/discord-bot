module.exports = {
    name: 'wiki',
    description: 'Link to the Resourceful Bees Wiki',
    cooldown: 5,
    execute(message) {
        message.channel.send("https://wiki.resourcefulbees.com");
    },
};