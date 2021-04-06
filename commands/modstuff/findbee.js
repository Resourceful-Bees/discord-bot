module.exports = {
    name: 'findbee',
    description: 'How do I find X bee?',
    cooldown: 5,
    execute(message) {
        message.channel.send("Bees that can spawn naturally will spawn following normal mob spawning rules for passive mobs. This means that they will spawn the same as cows, pigs, sheep, etc. Bees have a spawn weight that gets calculated against the total weight of all mobs that can spawn in the same biome. This means that biomes with fewer mob types which can spawn will increase the likelihood of you finding the bee that you want. When having difficulty in finding certain bees, remember that Flower Forest gives a bonus to bee spawn weighting and that killing off mobs will allow for new ones to spawn.");
    }
};