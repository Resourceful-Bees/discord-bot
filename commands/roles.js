const { MessageButton, MessageSelectMenu, MessageActionRow } = require("discord.js");
const { roleSelections } = require("../config.json")

module.exports = {
    id: 'roles',
    execute(interaction) {
        if (isNotInGuild(interaction)) return;

        const messageRow = new MessageActionRow();
        messageRow.addComponents([
            new MessageButton({style:"SUCCESS", customId: "remove_roles_menu", label: "Remove Roles"}),
            new MessageButton({style:"SUCCESS", customId: "add_roles_menu", label: "Add Roles"})
        ]);

        interaction.reply({
            content: "Pick if you want to add or remove roles or dismiss this message!",
            components : [messageRow],
            ephemeral: true
        });
    },
    executeSelection(interaction){
        if (isNotInGuild(interaction)) return;

        const roleId = interaction.values[0];
        if (interaction.customId.startsWith("add")){
            interaction.member.roles.add(roleId);
        }else if (interaction.member.roles.cache.has(roleId)) {
            interaction.member.roles.remove(roleId);
        }
        interaction.reply({content: "Role Added! You can Dismiss this.", ephemeral: true});
    },
    changeMenu(interaction) {
        if (isNotInGuild(interaction)) return;

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

const isNotInGuild = (interaction) => {
    if (interaction.inGuild()) return false;
    interaction.reply({
        content: "This is a guild only command!",
        ephemeral: true
    });
    return true;
}

const commandData = {
    "name": "roles",
    "description": "The roles which you can get in Team Resourceful Server"
}