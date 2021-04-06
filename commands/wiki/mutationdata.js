module.exports = {
    name: 'mutationdata',
    description: 'Mutation Data wiki link',
    cooldown: 5,
    execute(message) {
        message.channel.send("https://wiki.resourcefulbees.com/en/1.16.3/bee_data/mutation_data/");
    }
};