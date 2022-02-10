const fs = require('fs');
const {token} = require('./config.json');
const {Intents, Client, Collection} = require("discord.js");
const {loadCommandsFromDisk} = require("./handlers/customcommands");

const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS]});
client.commands = new Collection();
client.autoComplete = new Collection();
client.selectionMenus = new Collection();

loadCommandsFromDisk()

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const event = require(`./events/${file}`);


    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args, client));
    } else {
        client.on(event.name, (...args) => event.execute(...args, client));
    }
}

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    if (command.id) {
        client.commands.set(command.id, command);
        if (command.autoComplete) {
            client.autoComplete.set(command.id, command)
        }
    }else if (command.ids) {
        for (let id of command.ids) {
            client.commands.set(id, command);
            if (command.autoComplete) {
                client.autoComplete.set(id, command)
            }
        }
    }
}

for (const file of fs.readdirSync('./menus').filter(file => file.endsWith('.js'))) {
    const menu = require(`./menus/${file}`);
    if (menu.id) {
        client.selectionMenus.set(menu.id, menu);
    }else if (menu.ids) {
        for (let id of menu.ids) {
            client.selectionMenus.set(id, menu);
        }
    }
}

client.login(token);

process.on('uncaughtException', function (err) {
    console.error(err.stack)
});