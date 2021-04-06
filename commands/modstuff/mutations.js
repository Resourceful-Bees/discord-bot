module.exports = {
    name: 'mutations',
    description: 'How do mutations work?',
    cooldown: 5,
    execute(message) {
        message.channel.send("Bees can mutate blocks into other types of blocks after having pollinated a flower and when flying over the block it can mutate. It can do this a certain number of times before needing to enter a hive and starting the process over. The best setup is a long tunnel structure with the flower and hive on opposite ends. You can see if a bee has a mutation by checking the beepedia or JEI.");
    }
};