const { MessageButton, MessageActionRow } = require("discord.js");

module.exports = {
    id: 'roles',
    execute(interaction) {
        if (!interaction.inGuild()) return interaction.reply({content: "This is a guild only command!", ephemeral: true});

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
    }
}

const commandData = {
    "name": "roles",
    "description": "The roles which you can get in Team Resourceful Server"
}