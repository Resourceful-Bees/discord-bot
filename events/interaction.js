const roles = require("../commands/roles")
module.exports = {
    name: 'interactionCreate',
    execute(interaction) {
        if (interaction.isCommand()){
            const command = interaction.client.commands.get(interaction.commandName);
            if (!command) return;
            command.execute(interaction);
        }
        if (interaction.isButton()) {
            if (interaction.customId.endsWith("_roles_menu")) {
                roles.changeMenu(interaction);
            }
        }
        if (interaction.isSelectMenu()) {
            if (interaction.customId.endsWith("_roles_selection")){
                roles.executeSelection(interaction);
            }
        }
    }
}