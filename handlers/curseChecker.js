const curse = require("mc-curseforge-api");
const fs = require("fs")
const { MessageEmbed } = require("discord.js");
const { modUpdatesChannel, updateTime } = require("../modupdates.config.json")

module.exports = {
    runChecker(client) {
        setInterval(() => {
            curse.getMod(384508).then(mod => {
                fs.readFile('modupdates.config.json', (err, data) => {
                    if (data) {
                        let json = JSON.parse(data.toString())
                        if (json.lastPublished !== mod.released.toString()) {
                            json.lastPublished = mod.released.toString()
                            fs.writeFile('modupdates.config.json', JSON.stringify(json, null, 4), () => {
                            })
                            const modFiles = mod.latestFiles;
                            if (modFiles.length <= 0) return;
                            sendOutNotification(client, modFiles[modFiles.length - 1]);
                        }
                    } else {
                        console.log(err)
                    }
                })
            });
        }, updateTime)
    }
}

const sendOutNotification = (client, modFile) => {
    const embed = new MessageEmbed();
    embed.setTitle("Resourceful Bees Mod Update!");
    embed.setDescription(`New File Released!\nIt was released <t:${Math.round((new Date(modFile.timestamp)).getTime() / 1000)}:R>`);
    embed.setColor(5942592);
    embed.addField("Versions", modFile.minecraft_versions.join(", "))
    embed.addField("Links", `[Download/Changelog](https://www.curseforge.com/minecraft/mc-mods/resourceful-bees/files/${modFile.id})`)
    embed.setThumbnail("https://i.imgur.com/jors9jz.png")

    client.channels.fetch(modUpdatesChannel).then(channel => {
        if (!channel) return;
        channel.send({embeds: [embed]})
    });
}