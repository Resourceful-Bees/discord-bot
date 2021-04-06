module.exports = {
    name: 'performant',
    description: 'Performant is incompatible with this mod.',
    cooldown: 5,
    execute(message) {
        message.channel.send("Because of the methods in which performant chooses to \"optimize\" the game, it is incompatible with our mod. If you experience issues and have this mod installed please reproduce the issues **without** the mod installed before requesting support. It is also recommended to simply remove the mod as it doesn't actually do *anything* to improve performance and is just a mere illusion.");
    }
};