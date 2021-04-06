module.exports = {
    name: 'colornames',
    description: 'Color Names wiki link',
    cooldown: 5,
    execute(message) {
        message.channel.send("https://wiki.resourcefulbees.com/en/1.16.3/extra_stuff/color_names/");
    }
};