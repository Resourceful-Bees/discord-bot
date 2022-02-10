module.exports = {
    id: 'paste',
    execute(interaction) {
        interaction.reply({
            content: "This command is no implemented because D.JS is not updated."
        })
        // const file = interaction.options.get("file", true);
        //
        // console.log(interaction.options.resolved)
        //
        // interaction.reply({
        //     content: "message"
        // })
    }
}

const commandData = {
    "name": "paste",
    "description": "Uploads a text document to our pastebin.",
    "options": [
        {
            "type": 11,
            "name": "file",
            "description": "The text file",
            "required": true
        }
    ]
}