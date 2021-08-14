const { updateRoles } = require("../config.json");
module.exports = {
    ids: ['add_roles_selection', 'remove_roles_selection'],
    execute(interaction) {
        if (!interaction.inGuild()) return interaction.reply({content: "This is a guild only menu!", ephemeral: true});

        const roleId = interaction.values[0];
        if (interaction.customId.startsWith("add")){
            interaction.member.roles.add(roleId).catch(() => {});
            if (updateRoles.includes(roleId)) interaction.member.roles.add("873346594446131251").catch(() => {});
        }else if (interaction.member.roles.cache.has(roleId)) {
            interaction.member.roles.remove(roleId).catch(() => {});
            for (let i in updateRoles) {
                if (interaction.member.roles.cache.has(updateRoles[i])) break;
                if (i === updateRoles.length - 1) {
                    interaction.member.roles.remove("873346594446131251").catch(() => {});
                }
            }
        }
        interaction.reply({content: "Role Added! You can Dismiss this.", ephemeral: true});
    }
}