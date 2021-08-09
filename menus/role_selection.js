module.exports = {
    ids: ['add_roles_selection', 'remove_roles_selection'],
    execute(interaction) {
        if (!interaction.inGuild()) return interaction.reply({content: "This is a guild only menu!", ephemeral: true});

        const roleId = interaction.values[0];
        if (interaction.customId.startsWith("add")){
            interaction.member.roles.add(roleId);
        }else if (interaction.member.roles.cache.has(roleId)) {
            interaction.member.roles.remove(roleId);
        }
        interaction.reply({content: "Role Added! You can Dismiss this.", ephemeral: true});
    }
}