const fs = require('fs');
const Discord = require('discord.js');
const {token} = require('./config.json');
const {Intents} = require("discord.js");

const client = new Discord.Client({intents: [Intents.FLAGS.GUILDS]});
client.commands = new Discord.Collection();
client.cooldowns = new Discord.Collection();

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
    }
}

client.login(token);

process.on('uncaughtException', function (err) {
    console.error(err.stack)
});