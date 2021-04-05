module.exports = {
    name: 'beedata',
    description: 'Custom Bee Data wiki link',
    cooldown: 5,
    execute(message) {
        message.channel.send("https://wiki.resourcefulbees.com/en/1.16.3/bee_data/custom_bee_data/");
    },
};