const { MessageActionRow, MessageSelectMenu} = require("discord.js");
const {roleSelections} = require("../roles.config.json");

module.exports = {
    id: 'roles',
    execute(interaction) {
        if (!interaction.inGuild()) return interaction.reply({content: "This is a guild only command!", ephemeral: true});

        const messageRow = new MessageActionRow();

        const selectionBox = new MessageSelectMenu();
        selectionBox.setCustomId("roles_selection")
        selectionBox.setMinValues(0)
        selectionBox.setPlaceholder("Select or unselect roles to remove or add them.")

        const cache = interaction.member.roles.cache;

        let options = []

        for (const id in roleSelections) {
            let defaultOption = {
                label: roleSelections[id].name,
                value: id,
                default: cache.has(id)
            };
            if (roleSelections[id].description) {
                defaultOption.description = roleSelections[id].description
            }
            if (roleSelections[id].emoji) {
                defaultOption.emoji = roleSelections[id].emoji
            }
            options.push(defaultOption)
        }

        if (options.length === 0) {
            interaction.reply({
                content: "Error: no selectable roles available.",
                ephemeral: true
            });
            return;
        }

        selectionBox.addOptions(options)

        messageRow.addComponents([selectionBox]);

        interaction.reply({
            content: "Select a role below.",
            components : [messageRow],
            ephemeral: true
        });
    }
}

const commandData = {
    "name": "roles",
    "description": "The roles which you can get in Team Resourceful Server"
}