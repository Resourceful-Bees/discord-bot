const fs = require('fs');
const Discord = require('discord.js');
const {token} = require('./config.json');
const {Intents} = require("discord.js");

const client = new Discord.Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS]});
client.commands = new Discord.Collection();
client.buttons = new Discord.Collection();
client.selectionMenus = new Discord.Collection();

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
    }else if (command.ids) {
        for (let id of command.ids) {
            client.commands.set(id, command);
        }
    }
}

for (const file of fs.readdirSync('./buttons').filter(file => file.endsWith('.js'))) {
    const button = require(`./buttons/${file}`);
    if (button.id) {
        client.buttons.set(button.id, button);
    }else if (button.ids) {
        for (let id of button.ids) {
            client.buttons.set(id, button);
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