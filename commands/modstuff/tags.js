module.exports = {
    name: 'tags',
    description: 'Minecraft wiki link for tags',
    cooldown: 5,
    execute(message) {
        message.channel.send("https://minecraft.fandom.com/wiki/Tag");
    }
};
