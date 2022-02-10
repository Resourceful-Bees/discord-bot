const {getCommands, addCommandToCategory} = require("../handlers/customcommands");
const {Permissions} = require("discord.js");
module.exports = {
    id: 'command',
    execute(interaction) {
        if (!interaction.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)){
            interaction.reply({content: "You don't have perms.", ephemeral: true});
            return;
        }
        
        const operation = interaction.options.getString('operation', true);
        const category = interaction.options.getString('category', true);
        const command = interaction.options.getString('command', true);
        const data = interaction.options.getString('data', false);

        if (operation === "remove") {
            const commands = getCommands(category);
            if (commands) {
                if (commands.delete(command)) {
                    interaction.reply({content: "Command successfully deleted!", ephemeral: true})
                } else {
                    interaction.reply({content: "Command does not exist.", ephemeral: true})
                }
            }else {
                interaction.reply({content: "Command category does not exist.", ephemeral: true})
            }
            return;
        } else if (operation === "add") {
            const commands = getCommands(category);
            if (commands) {
                interaction.reply({content: "Command successfully added!", ephemeral: true})
                addCommandToCategory(category, command, data)
            }else {
                interaction.reply({content: "Command category does not exist.", ephemeral: true})
            }
            return;
        }
        interaction.reply({content: "Command operation unknown.", ephemeral: true})
    }
}

const commandData = {
    "name": "command",
    "description": "Command admin.",
    "default_permission": false,
    "options": [
        {
            "type": 3,
            "name": "operation",
            "description": "Operation",
            "required": true,
            "choices": [
                {
                    "name": "Add",
                    "value": "add"
                },
                {
                    "name": "Remove",
                    "value": "remove"
                }
            ]
        },
        {
            "type": 3,
            "name": "category",
            "description": "Category",
            "required": true
        },
        {
            "type": 3,
            "name": "command",
            "description": "Command",
            "required": true
        },
        {
            "type": 3,
            "name": "data",
            "description": "Data",
            "required": false
        }
    ]
}
