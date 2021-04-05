module.exports = {
    name: 'combatdata',
    description: 'Combat Data wiki link',
    cooldown: 5,
    execute(message) {
        message.channel.send("https://wiki.resourcefulbees.com/en/1.16.3/bee_data/combat_data/");
    },
};