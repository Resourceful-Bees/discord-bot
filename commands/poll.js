const {MessageEmbed} = require("discord.js");

const emojis = ["1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣","🔟"];

module.exports = {
    id: 'poll',
    execute(interaction) {
        if (!interaction.member.roles.cache.has("738561223385415811")){
            interaction.reply({content: "Dont have perms.", ephemeral: true});
            return; //Back up just in case discord doesnt work right.
        }

        const embed = new MessageEmbed();
        let desc = [];
        for (let i = 1; i <= 10; i++) {
            const option = interaction.options.getString('option' + i);
            if (!option) break;
            desc.push(emojis[i - 1] + " " + option);
        }

        embed.setTitle(interaction.options.getString('title'))
        embed.setDescription(desc.join("\n"));
        embed.setColor('ORANGE')

        interaction.options.getChannel('channel', true).send({embeds: [embed]}).then(message => {
            interaction.reply({content: "Poll Created!", ephemeral: true})
            for (let i = 0; i < desc.length; i++) message.react(emojis[i]);

            message.channel.threads.create({
                name: "Poll Thread",
                startMessage: message,
                autoArchiveDuration: "MAX"
            })
        });
    }
}

const commandData = {
    "name": "poll",
    "description": "Polls people for their answers.",
    "default_permission": false,
    "options": [
        {
            "type": 7,
            "name": "channel",
            "description": "Poll Channel",
            "required": true
        },
        {
            "type": 3,
            "name": "title",
            "description": "Title",
            "required": true
        },
        {
            "type": 3,
            "name": "option1",
            "description": "Option 1",
            "required": true
        },
        {
            "type": 3,
            "name": "option2",
            "description": "Option 2",
            "required": true
        },
        {
            "type": 3,
            "name": "option3",
            "description": "Option 3",
            "required": false
        },
        {
            "type": 3,
            "name": "option4",
            "description": "Option 4",
            "required": false
        },
        {
            "type": 3,
            "name": "option5",
            "description": "Option 5",
            "required": false
        },
        {
            "type": 3,
            "name": "option6",
            "description": "Option 6",
            "required": false
        },
        {
            "type": 3,
            "name": "option7",
            "description": "Option 7",
            "required": false
        },
        {
            "type": 3,
            "name": "option8",
            "description": "Option 8",
            "required": false
        },
        {
            "type": 3,
            "name": "option9",
            "description": "Option 9",
            "required": false
        },
        {
            "type": 3,
            "name": "option10",
            "description": "Option 10",
            "required": false
        }
    ]
}