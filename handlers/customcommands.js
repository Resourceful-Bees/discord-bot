const {Collection} = require("discord.js");
const fs = require("fs")

const commands = new Collection();

module.exports = {
    addCommandToCategory(category, command, data) {
        let mapCategory = commands.get(category);
        if (!mapCategory) {
            commands.set(category, new Collection());
            mapCategory = commands.get(category);
        }
        mapCategory.set(command, data)
        let json = {}
        commands.forEach((v, k) => {
            let data = {}
            v.forEach((msg, sub) => data[sub] = msg)
            json[k] = data
        })
        fs.writeFile('commands.config.json', JSON.stringify(json, null, 4), () => {})
    },
    loadCommandsFromDisk() {
        fs.readFile('commands.config.json', (err, data) => {
            const json = JSON.parse(data.toString());
            for (const category in json) {
                const newCommands = new Collection()
                for (const sub in json[category]) {
                    newCommands.set(sub, json[category][sub])
                }
                commands.set(category, newCommands)
            }
        })
    },
    getCommands(category) {
        return commands.get(category);
    }
}