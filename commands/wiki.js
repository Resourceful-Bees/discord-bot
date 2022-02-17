const {getCommands} = require("../handlers/customcommands");
module.exports = {
    id: 'wiki',
    autoComplete: true,
    execute(interaction) {
        const category = interaction.options.getString('category', true);
        let message = getCommands("wiki").get(category)
        if (!message) message = "https://wiki.resourcefulbees.com";

        interaction.reply({
            content: message,
            ephemeral: interaction.options.getBoolean('silent') != null && interaction.options.getBoolean('silent')
        })
    },
    autocomplete(interaction) {
        const focusedValue = interaction.options.getFocused();
        const choices = Array.from(getCommands("wiki").keys());
        const filtered = choices.filter(choice => choice.startsWith(focusedValue));
        interaction.respond(filtered.map(choice => ({ name: choice, value: choice })));
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