module.exports = {
    name: 'langfile',
    description: 'Create a language file wiki link',
    cooldown: 5,
    aliases: ['languagefiles', 'languagefile', 'lang'],
    execute(message) {
        message.channel.send("https://wiki.resourcefulbees.com/en/1.16.3/getting_started/language_files/");
    }
};