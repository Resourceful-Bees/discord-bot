module.exports = {
    name: 'langfile',
    description: 'Create a language file wiki link',
    cooldown: 5,
    execute(message) {
        message.channel.send("https://wiki.resourcefulbees.com/en/1.16.3/getting_started/bee_creation/");
    },
};