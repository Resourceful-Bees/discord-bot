module.exports = {
    id: 'wiki',
    execute(interaction) {
        let message = "Unknown category, command code needs to be updated."

        switch (interaction.options.getString('category')) {
            case 'beedata':
                message = "https://wiki.resourcefulbees.com/en/1.16.3/bee_data/custom_bee_data/";
                break;
            case 'breeddata':
                message = "https://wiki.resourcefulbees.com/en/1.16.3/bee_data/breed_data/";
                break;
            case 'centrifugedata':
                message = "https://wiki.resourcefulbees.com/en/1.16.3/bee_data/centrifuge_data/";
                break;
            case 'colordata':
                message = "https://wiki.resourcefulbees.com/en/1.16.3/bee_data/color_data/";
                break;
            case 'colornames':
                message = "https://wiki.resourcefulbees.com/en/1.16.3/extra_stuff/color_names/";
                break;
            case 'combatdata':
                message = "https://wiki.resourcefulbees.com/en/1.16.3/bee_data/combat_data/";
                break;
            case 'createbee':
                message = "https://wiki.resourcefulbees.com/en/1.16.3/getting_started/bee_creation/";
                break;
            case 'lang':
                message = "https://wiki.resourcefulbees.com/en/1.16.3/getting_started/language_files/";
                break;
            case 'mutationdata':
                message = "https://wiki.resourcefulbees.com/en/1.16.3/bee_data/mutation_data/";
                break;
            case 'spawndata':
                message = "https://wiki.resourcefulbees.com/en/1.16.3/bee_data/spawn_data/";
                break;
            case 'traitdata':
                message = "https://wiki.resourcefulbees.com/en/1.16.3/bee_data/trait_data/";
                break;
            default:
                message = "https://wiki.resourcefulbees.com";
        }

        interaction.reply({
            content: message,
            ephemeral: interaction.options.getBoolean('silent') != null && interaction.options.getBoolean('silent')
        })
    }
}

const commandData = {
    "name": "wiki",
    "description": "Responds with the wiki for a specific category.",
    "options": [
        {
            "type": 3,
            "name": "category",
            "description": "The wiki category",
            "required": false,
            "choices": [
                {
                    "name": "Bee Data",
                    "value": "beedata"
                },
                {
                    "name": "Breed Data",
                    "value": "breeddata"
                },
                {
                    "name": "Centrifuge Data",
                    "value": "centrifugedata"
                },
                {
                    "name": "Color Data",
                    "value": "colordata"
                },
                {
                    "name": "Color Names",
                    "value": "colornames"
                },
                {
                    "name": "Combat Data",
                    "value": "combatdata"
                },
                {
                    "name": "Create Bee",
                    "value": "createbee"
                },
                {
                    "name": "Language File",
                    "value": "lang"
                },
                {
                    "name": "Mutation Data",
                    "value": "mutationdata"
                },
                {
                    "name": "Spawn Data",
                    "value": "spawndata"
                },
                {
                    "name": "Trait Data",
                    "value": "traitdata"
                }
            ]
        },
        {
            "type": 5,
            "name": "silent",
            "description": "If the message should not be sent globally.",
            "required": false
        }
    ]
}