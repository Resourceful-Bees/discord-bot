const { messages } = require("../support.config.json");
module.exports = {
    id: "support",
    execute(interaction) {
        const value = interaction.values[0];
        if (!value) return interaction.reply({content:"No selection given", ephemeral: true});

        if (value.startsWith("message_")) return interaction.reply(messages[value.replace("message_", "")].message);

        interaction.client.channels.fetch(value).then(channel => {
            if (!channel.isThread()) return interaction.reply({content: "Support channel received want the correct format report this to @ThatGravyBoat", ephemeral: true});
            if (channel.archived){
                channel.setArchived(false, `Restoring for user <@${interaction.member.id}>`)
                    .then(() => interaction.reply({content: `Click on this <#${channel.id}> to go to the proper support channel.`, ephemeral: true}));
            }else {
                interaction.reply({content: `Click on this <#${channel.id}> to go to the proper support channel.`, ephemeral: true});
            }
        });
    }
}