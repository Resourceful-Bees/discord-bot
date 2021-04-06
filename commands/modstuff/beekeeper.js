module.exports = {
    name: 'beekeeper',
    description: 'Use the Beepedia and JEI to find info about bees.',
    cooldown: 5,
    aliases: ['villager'],
    execute(message) {
        message.channel.send("A villager can be given the Beekeeper profession with the use of any nest or beehive.");
    }
};