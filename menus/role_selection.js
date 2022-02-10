const { addAbleRolesRole, roleSelections } = require("../roles.config.json");
module.exports = {
    id: "roles_selection",
    execute(interaction) {
        if (!interaction.inGuild()) return interaction.reply({content: "This is a guild only menu!", ephemeral: true});
        const values = interaction.values;
        let roles = interaction.member.roles;
        if (values.length === 0 && roles.cache.has(addAbleRolesRole)) {
            roles.remove(addAbleRolesRole).catch(() => {})
        } else if (values.length > 0 && !roles.cache.has(addAbleRolesRole)) {
            roles.add(addAbleRolesRole).catch(() => {})
        }
        const rolesInSelection = Object.keys(roleSelections)
        const rolesToRemove = rolesInSelection.filter(id =>roles.cache.has(id) && !values.includes(id));
        const rolesToAdd = values.filter(id => rolesInSelection.includes(id) && !roles.cache.has(id))

        rolesToRemove.forEach(id => roles.remove(id).catch(() => {}))
        rolesToAdd.forEach(id => roles.add(id).catch(() => {}))

        interaction.reply({content: "Roles changed! You can Dismiss these.", ephemeral: true});
    }
}