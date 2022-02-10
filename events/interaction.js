module.exports = {
    name: 'interactionCreate',
    execute(interaction) {
        if (interaction.isCommand()){
            const command = interaction.client.commands.get(interaction.commandName);
            if (!command) return;
            command.execute(interaction);
        }
        if (interaction.isSelectMenu()) {
            const menu = interaction.client.selectionMenus.get(interaction.customId);
            if (!menu) return;
            menu.execute(interaction);
        }
        if (interaction.isAutocomplete()) {
            const autoComplete = interaction.client.autoComplete.get(interaction.commandName);
            if (!autoComplete) return;
            autoComplete.autocomplete(interaction)
        }
    }
}