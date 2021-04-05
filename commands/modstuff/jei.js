module.exports = {
    name: 'jei',
    description: 'Use the Beepedia and JEI to find info about bees.',
    cooldown: 5,
    aliases: ['beepedia'],
    execute(message) {
        message.channel.send("Use the Beepedia and JEI to find information about bees. You can can see what flowers bees like to pollinate, how to breed them, where they spawn, as well as other important information about the bees. When using JEI, clicking will show you recipes while right-clicking will show usages. Right-clicking a bee with the beepedia will open it up with that bees info displayed.");
    },
};