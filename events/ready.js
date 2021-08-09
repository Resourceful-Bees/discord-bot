const { MessageActionRow, MessageSelectMenu} = require("discord.js");
const { message, channel, threads, messages } = require("../support.config.json");
module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(`Ready! Logged in as ${client.user.tag}`);
        require("../handlers/curseChecker").runChecker(client);

        if (channel && message) {
            client.channels.fetch(channel).then(c => {
                c.messages.fetch(message).then(msg => {
                    const selectionBox = new MessageSelectMenu();
                    selectionBox.setPlaceholder("Select a support channel.");
                    selectionBox.setCustomId("support");
                    selectionBox.setMaxValues(1);
                    selectionBox.setMinValues(1);

                    let options = [];
                    for (const message of Object.keys(messages)) {
                        options.push({
                            label: messages[message].label,
                            value: `message_${message}`
                        });
                    }

                    for (let thread of Object.keys(threads)) {
                        options.push({
                            label: threads[thread],
                            value: thread
                        });
                    }

                    selectionBox.addOptions(options);

                    msg.edit({
                        embeds: [
                            {
                                title: "Support Channels",
                                description: "Click the selection menu below to select which support channel you may need.",
                                fields: [
                                    {
                                        name: "Info",
                                        value: "If a category has (Dev) next to it that means its for the creation of that thing or about the use of that in development process not general user use."
                                    }
                                ]
                            }
                        ],
                        components: [new MessageActionRow().addComponents(selectionBox)]
                    });
                });
            });
        }

    }
};