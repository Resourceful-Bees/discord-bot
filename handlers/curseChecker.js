const curse = require("mc-curseforge-api");
const fs = require("fs")
const { MessageEmbed } = require("discord.js");
const { modUpdatesChannel } = require("../config.json")

module.exports = {
    runChecker(client) {
        setInterval(() => {
            curse.getMod(384508).then(mod => {
                fs.readFile('lastPublish.txt', (err, data) => {
                    if (data.toString() !== mod.released.toString()){
                        fs.writeFile('lastPublish.txt', mod.released.toString(), () => {})
                        const modFiles = mod.latestFiles;
                        if (modFiles.length <= 0) return;
                        sendOutNotification(client, modFiles[modFiles.length-1]);
                    }
                })
            });
        }, 18000000)
    }
}

const sendOutNotification = (client, modFile) => {
    const embed = new MessageEmbed();
    embed.setTitle("Resourceful Bees Mod Update!");
    embed.setDescription(`New File Released!\nIt was released <t:${Math.round((new Date(modFile.timestamp)).getTime() / 1000)}:R>`);
    embed.setColor(5942592);
    embed.addField("Versions", modFile.minecraft_versions.join(", "))
    embed.addField("Download", "[Link](https://www.curseforge.com/minecraft/mc-mods/resourceful-bees/files/"+modFile.id+")")
    embed.setThumbnail("https://i.imgur.com/jors9jz.png")

    client.channels.fetch(modUpdatesChannel).then(channel => {
        if (!channel) return;
        channel.send({embeds: [embed]})
    });
}