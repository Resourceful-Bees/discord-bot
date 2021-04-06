module.exports = {
    name: 'datapack',
    description: 'Minecraft wiki link for datapacks',
    cooldown: 5,
    execute(message) {
        message.channel.send("https://minecraft.fandom.com/wiki/Tag");
    }
};
