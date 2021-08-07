module.exports = {
    id: 'embed',
    execute(interaction) {
        if (!interaction.member.roles.cache.has("738561223385415811")){
            interaction.reply({content: "Dont have perms.", ephemeral: true});
            return; //Back up just in case discord doesnt work right.
        }

        const message = interaction.options.getString('message', true);
        const channel = interaction.options.getChannel('channel', true);
        try {
            interaction.reply({content: "Message Created!", ephemeral: true})
            channel.send(JSON.parse(message.trim()))
        }catch (e){
            interaction.reply({content: "Message not created data was bad.", ephemeral: true})
        }
    }
}

const commandData = {
    "name": "embed",
    "description": "Creates a message with the data provided in a specific channel for the admins.",
    "options": [
        {
            "type": 7,
            "name": "channel",
            "description": "The channel where the message will be sent.",
            "required": true
        },
        {
            "type": 3,
            "name": "message",
            "description": "The message that will be sent.",
            "required": true
        }
    ]
}