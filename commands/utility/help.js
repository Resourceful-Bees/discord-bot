const { prefix } = require('../../config.json');
const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'List all of my commands or info about a specific command.',
    aliases: ['commands'],
    usage: '[command name]',
    cooldown: 5,
    guildOnly: true,
    execute(message, args) {
        const { commands } = message.client;

        if (!args.length) {
            const messageEmbed = new Discord.MessageEmbed();
            messageEmbed.setTitle("List of Commands: ");
            messageEmbed.setDescription(commands.filter(cmd => isAllowedToUseCommand(cmd, message))
                .map(cmd => cmd.name).join('\n'));
            messageEmbed.setFooter(`Note: You can send \`${prefix}help [command name]\` to get info on a specific command!`);
            return message.channel.send(messageEmbed);
        }

        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

        if (!command) {
            return sendErrorMessage(message, 'that\'s not a valid command!');
        }else if (!isAllowedToUseCommand(command, message)){
            return sendErrorMessage(message, 'You\'re not allowed to use that command!');
        }

        const embed = new Discord.MessageEmbed();
        embed.setTitle(`Command: \`${command.name}\``)
        if (command.description) embed.setDescription(`**Description:** ${command.description}`);
        if (command.aliases)embed.addField('Aliases: ', command.aliases.join('\n'))
        if (command.usage) embed.addField(`Usage:`, `${prefix}${name} ${command.usage}`)
        embed.addField('Cooldown:', `${command.cooldown || 3} second(s)`);

        message.channel.send(embed);
    }
};


const isAllowedToUseCommand = (command, message) => {
    if (command.permissions) {
        const authorPerms = message.channel.permissionsFor(message.author);
        if (!authorPerms || !authorPerms.has(command.permissions)) {
            return false;
        }
    }

    if (command.roles) {
        const authorRoles = message.member.roles.cache;
        let hasRoles = false;
        for (let role of command.roles) {
            if (authorRoles.has(role)) {
                hasRoles = true;
                break;
            }
        }

        if (!authorRoles || !hasRoles) {
            return false;
        }
    }
    return true;
}

const sendErrorMessage = (message, text) => {
    const embed = new Discord.MessageEmbed();
    embed.setTitle("Error Occurred");
    embed.setDescription(`**Error:** ${text}`);
    embed.setColor(16725815);
    message.channel.send(embed);
}