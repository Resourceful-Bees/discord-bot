module.exports = {
    name: 'skybees',
    description: 'How to fix skybees modpack issues',
    cooldown: 5,
    execute(message) {
        message.channel.send("To fix weird bee issues in the Sky Bees modpack, update Resourceful Bees to 0.6.7.2b then update forge to a newer version. Finally, fix a color value in the sieve bee json file by adding a `#` to it.");
    }
};