const {MessageSelectMenu, MessageActionRow} = require("discord.js");
const {roleSelections} = require("../config.json");
module.exports = {
    ids: ['remove_roles_menu', 'add_roles_menu'],
    execute(interaction) {
        if (!interaction.inGuild()) return interaction.reply({content: "This is a guild only button!", ephemeral: true});

        const isAdding = interaction.customId.startsWith("add");

        const selectionBox = new MessageSelectMenu({
            customId: (isAdding ? "add_roles_selection" : "remove_roles_selection"),
            maxValues: 1,
            minValues: 1,
            placeholder: "Please Select a role."
        });

        let options = [];

        const roleCache = interaction.member.roles.cache;
        for (const role of Object.keys(roleSelections)) {
            if (!isAdding && roleCache.size === 0) break;
            if (!(isAdding ? !roleCache.has(role) : roleCache.has(role))) continue;
            options.push({
                label: roleSelections[role],
                value: role
            });
        }

        selectionBox.addOptions(options);

        let message;
        if (options.length === 0) {
            message = "No roles available.";
        }else if (isAdding) {
            message = "Add the role you would like.\nIf you want to add multiple roles close this and\nclick the add roles again after selecting a role to add here.";
        }else {
            message = "Select the role you would like to remove.\nIf you want to remove multiple roles close this and\nclick the remove roles again after selecting a role to remove here.";
        }

        const msgData = { content: message, ephemeral: true };
        if (options.length > 0) msgData.components = [new MessageActionRow().addComponents([selectionBox])];

        interaction.reply(msgData);
    }
}