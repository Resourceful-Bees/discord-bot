const {getCommands} = require("../handlers/customcommands");
module.exports = {
    id: 'tag',
    autoComplete: true,
    execute(interaction) {
        const name = interaction.options.getString('name', true);
        let message = getCommands("tag").get(name)
        if (!message) message = "Unknown tag.";

        interaction.reply({
            content: message,
            ephemeral: interaction.options.getBoolean('silent') != null && interaction.options.getBoolean('silent')
        })
    },
    autocomplete(interaction) {
        const focusedValue = interaction.options.getFocused();
        const choices = Array.from(getCommands("tag").keys());
        const filtered = choices.filter(choice => choice.startsWith(focusedValue));
        interaction.respond(filtered.map(choice => ({ name: choice, value: choice })));
    }
}

const commandData = {
    "name": "tag",
    "description": "Random collection of quick responses.",
    "options": [
        {
            "type": 3,
            "name": "name",
            "description": "The name of the tag",
            "required": true,
            "autocomplete": true
        },
        {
            "type": 5,
            "name": "silent",
            "description": "If the message should not be sent globally.",
            "required": false
        }
    ]
}