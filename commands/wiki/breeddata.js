module.exports = {
    name: 'breeddata',
    description: 'Breed Data wiki link',
    cooldown: 5,
    execute(message) {
        message.channel.send("https://wiki.resourcefulbees.com/en/1.16.3/bee_data/breed_data/");
    },
};