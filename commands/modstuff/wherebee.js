module.exports = {
    name: 'wherebee',
    description: 'Help! My bee is missing!',
    cooldown: 5,
    execute(message) {
        message.channel.send("If a bee stings a player then depending on pack/bee configuration it will die. Bees can also despawn if they are not within range of a hive, apiary, or beecon for 10 consecutive minutes. Bees that are leashed, are a child, are carrying nectar, are a passenger, have a saved flower position, or have a custom name with a name tag do not despawn.");
    },
};