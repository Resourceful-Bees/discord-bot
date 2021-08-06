module.exports = {
    id: 'help',
    execute(interaction) {
        let message = "Unknown category, command code needs to be updated."

        switch (interaction.options.get('category').value) {
            case 'villager':
                message = "A villager can be given the Beekeeper profession with the use of any nest or beehive.";
                break;
            case 'datapack':
                message = "https://minecraft.fandom.com/wiki/Data_Pack";
                break;
            case 'findbee':
                message = "Bees that can spawn naturally will spawn following normal mob spawning rules for passive mobs. This means that they will spawn the same as cows, pigs, sheep, etc. Bees have a spawn weight that gets calculated against the total weight of all mobs that can spawn in the same biome. This means that biomes with fewer mob types which can spawn will increase the likelihood of you finding the bee that you want. When having difficulty in finding certain bees, remember that Flower Forest gives a bonus to bee spawn weighting and that killing off mobs will allow for new ones to spawn.";
                break;
            case 'beepedia':
            case 'jei':
                message = "Use the Beepedia and JEI to find information about bees. You can can see what flowers bees like to pollinate, how to breed them, where they spawn, as well as other important information about the bees. When using JEI, clicking will show you recipes while right-clicking will show usages. Right-clicking a bee with the beepedia will open it up with that bees info displayed.";
                break;
            case 'mutations':
                message = "Bees can mutate blocks into other types of blocks after having pollinated a flower and when flying over the block it can mutate. It can do this a certain number of times before needing to enter a hive and starting the process over. The best setup is a long tunnel structure with the flower and hive on opposite ends. You can see if a bee has a mutation by checking the beepedia or JEI.";
                break;
            case 'performant':
                message = "Bees can mutate blocks into other types of blocks after having pollinated a flower and when flying over the block it can mutate. It can do this a certain number of times before needing to enter a hive and starting the process over. The best setup is a long tunnel structure with the flower and hive on opposite ends. You can see if a bee has a mutation by checking the beepedia or JEI.";
                break;
            case 'skybees':
                message = "To fix weird bee issues in the Sky Bees modpack, update Resourceful Bees to 0.6.7.2b then update forge to a newer version. Finally, fix a color value in the sieve bee json file by adding a `#` to it.";
                break;
            case 'tags':
                message = "https://minecraft.fandom.com/wiki/Tag";
                break;
            case 'despawn':
            case 'wherebee':
                message = "If a bee stings a player then depending on pack/bee configuration it will die. Bees can also despawn if they are not within range of a hive, apiary, or beecon for 10 consecutive minutes. Bees that are leashed, are a child, are carrying nectar, are a passenger, have a saved flower position, or have a custom name with a name tag do not despawn.";
                break;
        }

        interaction.reply({
            content: message,
            ephemeral: interaction.options.get('silent', false) && interaction.options.get('silent').value
        })
    }
}

const commandData = {
    "name": "help",
    "description": "Responds with help for a specific part of the mod.",
    "options": [
        {
            "type": 3,
            "name": "category",
            "description": "The help category",
            "required": true,
            "choices": [
                {
                    "name": "Beekeeper",
                    "value": "villager"
                },
                {
                    "name": "Villager",
                    "value": "villager"
                },
                {
                    "name": "Datapack",
                    "value": "datapakc"
                },
                {
                    "name": "Findbee",
                    "value": "findbee"
                },
                {
                    "name": "JEI",
                    "value": "jei"
                },
                {
                    "name": "Beepedia",
                    "value": "beepedia"
                },
                {
                    "name": "Mutations",
                    "value": "mutations"
                },
                {
                    "name": "Performant",
                    "value": "performant"
                },
                {
                    "name": "Skybees",
                    "value": "skybees"
                },
                {
                    "name": "Tags",
                    "value": "tags"
                },
                {
                    "name": "Wherebee",
                    "value": "wherebee"
                },
                {
                    "name": "Despawn",
                    "value": "despawn"
                }
            ]
        },
        {
            "type": 3,
            "name": "silent",
            "description": "If the message should not be sent globally.",
            "required": false
        }
    ]
}