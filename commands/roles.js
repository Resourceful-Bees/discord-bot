const { MessageButton, MessageSelectMenu, MessageActionRow } = require("discord.js");
const { roleSelections } = require("../config.json")



module.exports = {
    id: 'roles',
    execute(interaction) {
        const messageRow = new MessageActionRow();
        messageRow.addComponents([
            new MessageButton({style:"SUCCESS", customId: "remove_roles_menu", label: "Remove Roles"}),
            new MessageButton({style:"SUCCESS", customId: "add_roles_menu", label: "Add Roles"})
        ])

        interaction.reply({
            content: "Pick if you want to add or remove roles or dismiss this message!",
            components : [messageRow],
            ephemeral: true
        })
    },
    executeSelection(interaction){
        const roleId = interaction.values[0];
        if (interaction.customId.startsWith("add")){
            interaction.member.roles.add(roleId);
        }else {
            interaction.member.roles.remove(roleId);
        }
        interaction.reply({content: "Role Added! You can Dismiss this.", ephemeral: true});
    },
    changeMenu(interaction) {
        const messageRow = new MessageActionRow();
        const selectionBox = new MessageSelectMenu();

        selectionBox.setPlaceholder("Please Select a role.");
        selectionBox.setMaxValues(1);
        selectionBox.setMinValues(1);

        let message = "?";
        let options = [];

        if (interaction.customId.startsWith("add")){
            selectionBox.setCustomId("add_roles_selection");
            message = "Add the role you would like.\nIf you want to add multiple roles close this and\nclick the add roles again after selecting a role to add here.";

            const roleCache = interaction.member.roles.cache;
            for (const i in roleSelections) {
                if (!roleCache.has(roleSelections[i].id)){
                    options.push({
                        label: roleSelections[i].label,
                        value: roleSelections[i].id
                    });
                }
            }

            if (options.length === 0) {
                message = "No roles available."
            }

            selectionBox.addOptions(options);
        }else {
            selectionBox.setCustomId("remove_roles_selection");
            message = "Select the role you would like to remove.\nIf you want to remove multiple roles close this and\nclick the remove roles again after selecting a role to remove here.";

            const roleCache = interaction.member.roles.cache;
            for (const i in roleSelections) {
                if (roleCache.has(roleSelections[i].id)){
                    options.push({
                        label: roleSelections[i].label,
                        value: roleSelections[i].id
                    })
                }
            }

            if (options.length === 0) {
                message = "No roles available."
            }

            selectionBox.addOptions(options);
        }

        messageRow.addComponents([selectionBox]);

        if (selectionBox.options.length === 0) {
            interaction.reply({
                content: message,
                ephemeral: true
            })
        } else {
            interaction.reply({
                content: message,
                components: [messageRow],
                ephemeral: true
            })
        }
    }
}


const commandData = {
    "name": "roles",
    "description": "The roles which you can get in Team Resourceful Server"
}