const {getCommands} = require("../handlers/customcommands");
module.exports = {
    id: 'help',
    autoComplete: true,
    execute(interaction) {
        const category = interaction.options.getString('category', true);
        let message = getCommands("help").get(category)
        if (!message) message = "Unknown category, command code needs to be updated.";

        interaction.reply({
            content: message,
            ephemeral: interaction.options.getBoolean('silent') != null && interaction.options.getBoolean('silent')
        })
    },
    autocomplete(interaction) {
        const focusedValue = interaction.options.getFocused();
        const choices = Array.from(getCommands("help").keys());
        const filtered = choices.filter(choice => choice.startsWith(focusedValue));
        interaction.respond(filtered.map(choice => ({ name: choice, value: choice })));
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
            "autocomplete": true,
        },
        {
            "type": 5,
            "name": "silent",
            "description": "If the message should not be sent globally.",
            "required": false
        }
    ]
}
